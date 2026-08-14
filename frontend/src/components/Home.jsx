import React from "react";
import { useState } from "react";

import NavBar from "../routes/navBar";
import searchBar from "../forms/searchBar";
import ResultsLayout from "./resultsLayout";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <header>
        <h2>iTunes API</h2>
        <NavBar />
      </header>

      <main>
        <hr className="hr-large"></hr>
        <h1>Home</h1>
        <hr className="hr-medium"></hr>
        <searchBar />
        <hr className="hr-medium"></hr>

        <ResultsLayout />
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

