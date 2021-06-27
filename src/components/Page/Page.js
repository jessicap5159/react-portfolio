import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

export default function page({
   
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  
}) {
  return (
      <>
      <Header
        
        setAboutSelected={setAboutSelected}
      
        setPortfolioSelected={setPortfolioSelected}
        
        setContactSelected={setContactSelected}
        
        setResumeSelected={setResumeSelected}
      ></Header>
      
    <div>
      {aboutSelected ? (
        <>
          <About></About>
          
        </>
      ) : portfolioSelected ? (
        <>
          <Portfolio />
        </>
      ) : contactSelected ? (
        <>
          <ContactForm></ContactForm>
        </>
      ) : (
        <Resume></Resume>
      )}
      <>
      <Footer></Footer>
      </>
      
    </div>
    </>
  );
}
