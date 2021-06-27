import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setResumeSelected,
    setPortfolioSelected
  } = props;
  return (
    <Router>
    <div>
      <header className="header">
        <h2>
            
        <Link to='/about'
              onClick={() => {
                setContactSelected(false) 
                setResumeSelected(false) 
                setPortfolioSelected(false) 
                setAboutSelected(true);
              }
            
              }>
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

export default Header;