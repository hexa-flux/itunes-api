import React from "react";
import { useState } from "react";

import NavBar from "../routes/navBar";
import resultsLayout from "./resultsLayout";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <resultsLayout />
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

