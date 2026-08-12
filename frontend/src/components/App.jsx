import React from "react";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <header>
        <h3>iTunes Search</h3>
        <hr className="hr-large"></hr>
        <h1>Home</h1>
        <hr className="hr-medium"></hr>
      </header>

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

export default App;
