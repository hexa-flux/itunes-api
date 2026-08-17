import React from "react";
import { useState, useEffect, useMemo, useContext } from "react";

import { Spinner } from "react-bootstrap";

import axiosClient from "../api/axiosClient";
import { AuthContext } from '../auth/AuthProvider';

import {
  getItemId,
  toggleFavourite,
  saveResultsToSession,
  loadResultsFromSession,
} from "../utilities/utilities";
import NavBar from "../routes/navBar";
import SearchBar from "../forms/searchBar";
import ResultsLayout from "./resultsLayout";

import Logo from "../assets/v2-logo-long.svg";

export default function Home() {
  const { ready } = useContext(AuthContext);

  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [results, setResults] = useState([]);
  const [lastQuery, setLastQuery] = useState(null);

  // Set local favourites to pass to ResultsLayout
  const [favourites, setFavourites] = useState(() => {
    try {
      const raw = localStorage.getItem("favourites");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Create a fast lookup of ids (memoized)
  const favouriteIds = React.useMemo(
    () => new Set(favourites.map((f) => getItemId(f))),
    [favourites],
  );

  // Results fetcher
  const fetchResults = async (query) => {
    setResults([]);
    setMsg(null);
    setLoading(true);
    setLastQuery(query);

    // If AuthProvider hasn't finished initialization, bail out early.
    if (!ready) {
    setLoading(false);
    setMsg({ type: "error", text: "Please wait — initializing authentication." });
    setTimeout(() => setMsg(null), 2500);
    return;
  }

    try {
      const res = await axiosClient.get("/itunes/search", { params: query });
      const data = res.data;

      if (Array.isArray(data.results)) {
        // Set results locally
        setResults(data.results);
        saveResultsToSession(data.results, query); // persist results + query
      } else {
        // server returned something unexpected
        setResults([]);
        setMsg({ type: "error", text: "Unexpected response from server." });
        saveResultsToSession([], null);
        setTimeout(() => setMsg(null), 2500);
      }
    } catch (err) {
      console.error("Failed to search:", err);
      if (err?.response?.status === 401) {
        setMsg({
          type: "error",
          text:
            err.response.data?.error ||
            err.response.data?.message ||
            "Search failed: Invalid token.",
        });
      } else if (err?.response?.status === 502) {
        setMsg({
          type: "error",
          text:
            err.response.data?.error ||
            err.response.data?.message ||
            "Search failed: Bad gateway.",
        });
      } else {
        setMsg({
          type: "error",
          text: err?.response?.data?.error || err?.message || "Search failed.",
        });
      }
      setTimeout(() => setMsg(null), 2500);
    } finally {
      setLoading(false);
    }
  };

  // restore cached results on mount
  useEffect(() => {
    const { results: cachedResults, lastQuery: cachedQuery } =
      loadResultsFromSession();
    if (Array.isArray(cachedResults) && cachedResults.length > 0) {
      setResults(cachedResults);
    }
    if (cachedQuery) {
      setLastQuery(cachedQuery);
    }
  }, []);

  // Call favourites toggler
const handleFavourite = (item) => {
  const next = toggleFavourite(item);
  if (next) {
    setFavourites(next);
    const added = next.some((f) => getItemId(f) === getItemId(item));
    setMsg({ type: "success", text: added ? "Added to favourites." : "Removed from favourites." });
  } else {
    setMsg({ type: "error", text: "Failed to update favourites." });
  }
  // clear transient message
  setTimeout(() => setMsg(null), 2000);
};

  return (
    <div>
      <header>
        <h2>iTunes API</h2>
        <h2 className="divider">|</h2>
        <NavBar />
      </header>

      <main>
        <hr className="hr-large"></hr>
        <h1>Home</h1>
        <hr className="hr-medium"></hr>

        <SearchBar
          initialValues={{
            query: lastQuery?.term ?? "",
            mediaType: lastQuery?.media ?? "all",
          }}
          onSubmit={fetchResults}
          disabled={!ready || loading}
        />

        <hr className="hr-medium"></hr>

        {/* Show success/error messages */}
        {msg && (
          <div style={{ color: msg.type === "error" ? "red" : "green" }}>
            {msg.text}
          </div>
        )}

        {/* Conditional rendering for loading / empty / results */}
        {loading ? (
          <div className="text-center my-4" aria-live="polite" aria-busy="true">
            <Spinner animation="border" role="status" variant="primary" />
            <div className="mt-2 visually-hidden">Loading results…</div>
          </div>
        ) : results.length === 0 ? (
          <div>No results found!</div>
        ) : (
          <ResultsLayout
            results={results}
            favouritesHandler={handleFavourite}
            isFavourited={(item) => favouriteIds.has(getItemId(item))}
          />
        )}
      </main>

      <footer>
        <hr className="hr-medium"></hr>
        <div className="footerDiv">
          <p>&copy; 2026 page by hexaflux.</p>
          <img src={Logo} width={120} alt="hexaflux" />
        </div>
      </footer>
    </div>
  );
}
