import React from "react";
// import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <div className="font">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" id="homeLink" href="/">
        Home
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/api/books">Saved Books</a>
     </li>
   </ul>
 </nav>
 {/* <Jumbotron/> */}
 </div>
  );
}

export default Nav;
