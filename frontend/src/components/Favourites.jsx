import React from "react";
import { useState, useEffect, useMemo } from "react";

import { toggleFavourite } from "../utilities/utilities";
import NavBar from "../routes/navBar";
import ResultsLayout from "./resultsLayout";

import Logo from "../assets/v2-logo-long.svg";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const updateFromStorage = (ev) => {
      // ev.key may be null, so read the key directly
      try {
        const raw = localStorage.getItem("favourites");
        setFavourites(raw ? JSON.parse(raw) : []);
      } catch (err) {
        console.error(err);
      }
    };

    // initial load
    updateFromStorage();

    window.addEventListener("storage", updateFromStorage); // cross-tab updates
    window.addEventListener("local-storage", updateFromStorage); // same-tab notifications

    return () => {
      window.removeEventListener("storage", updateFromStorage);
      window.removeEventListener("local-storage", updateFromStorage);
    };
  }, []);

  // Create a fast lookup of ids (memoized)
  const favouriteIds = React.useMemo(
    () => new Set(favourites.map((f) => f.trackId)),
    [favourites],
  );

  const handleRemoval = (item) => {
    const next = toggleFavourite(item);
    if (next) {
      setFavourites(next);
      setMsg({ type: "success", text: "Removed from favourites." });
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
        <NavBar />
      </header>

      <main>
        <hr className="hr-large"></hr>
        <h1>Favourites</h1>
        <hr className="hr-medium"></hr>

        {msg && (
          <div style={{ color: msg.type === "error" ? "red" : "green" }}>
            {msg.text}
          </div>
        )}

        <ResultsLayout
          results={favourites}
          favouritesHandler={handleRemoval}
          isFavourited={(item) => favouriteIds.has(item.trackId)}
        />
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
