import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favourites" className="nav_link">
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
