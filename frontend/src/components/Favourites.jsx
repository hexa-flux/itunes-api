import React from "react";

import NavBar from "../routes/navBar";

import Logo from "../assets/v2-logo-long.svg";

export default function Favourites() {
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
