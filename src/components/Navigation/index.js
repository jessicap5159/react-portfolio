import React from 'react';

function Nav(props) {
  const {
    contactSelected, setContactSelected
  } = props;
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="wave">
            {" "}
            &#128075;
          </span>{" "}
          Welcome!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>About me</a>
          </li>
          <li>
            <a href="#Portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setContactSelected(true)}>Contact</a>
          </li>
          <li>
            <a href="#Resume" onClick={() => setContactSelected(false)}>Résumé</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
