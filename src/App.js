import React, { useState } from "react";
import "./index.css";
import Nav from "./components/Navigation/Nav";
import Page from "./components/Page/Page";



function App() {
  const [
  portfolioSelected,
    setPortfolioSelected] = useState(false);
    
    const [contactSelected,
    setContactSelected] = useState(false);
    
    const [resumeSelected,
    setResumeSelected] = useState(false);
   
const [
  aboutSelected,
    setAboutSelected
] = useState(true);
  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
      <Page
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Page>
      </main>
    </div>
  );
}

export default App;
