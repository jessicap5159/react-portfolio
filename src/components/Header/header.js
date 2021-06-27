import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <Router>
    <div>
      <header className="flex-row px-1">
        <h2>
            
          <Link to="/">
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
