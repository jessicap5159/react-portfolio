import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <Router>
    <div>
      <header className="header">
        <h2>
            
          <Link to="/about">
            <span role="img" aria-label="wave">
              {" "}
              &#128075;
            </span>{" "}
            Welcome!
          </Link>
        </h2>
      </header>
    </div>
    </Router>
  );
}
