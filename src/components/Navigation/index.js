import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;
  return (
    <Router>
    <header>
      <h2>
        <Link to="/">
          <span role="img" aria-label="wave">
            {" "}
            &#128075;
          </span>{" "}
          Welcome!
        </Link>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to='/about'
              onClick={() => {
                setContactSelected(false) 
                setResumeSelected(false) 
                setPortfolioSelected(false) 
                setAboutSelected(true);
              }
                
              }
            >
              About me
            </Link>
          </li>
          <li>
            <Link to="/portfolio"
              onClick={() => {
                setContactSelected(false) 
                setResumeSelected(false) 
                setPortfolioSelected(true) 
                setAboutSelected(false);
              }
            }
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact"
              onClick={() => {
                setContactSelected(true) 
                setResumeSelected(false) 
                setPortfolioSelected(false) 
                setAboutSelected(false);
              }
            }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to='/resume'
              onClick={() => {
                setContactSelected(false) 
                setResumeSelected(true) 
                setPortfolioSelected(false) 
                setAboutSelected(false);
              }
            }
            >
              Résumé
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </Router>
  );
}

export default Nav;
