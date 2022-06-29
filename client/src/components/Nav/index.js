import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" id="homeLink" href="/">
        Home
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="navbar-brand" id="savedLink" href="/api/books">
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
