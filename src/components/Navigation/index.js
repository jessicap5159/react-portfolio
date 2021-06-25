function Nav() {
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
            <a href="#about">About me</a>
          </li>
          <a href="#Portfolio">Portfolio</a>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#Resume">Résumé</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
