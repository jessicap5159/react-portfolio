function Nav() {

    return (
        <header>
        <h2>
          <a href="/">
            <span role="img" aria-label="wave"> &#128075;</span> Welcome!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;
  