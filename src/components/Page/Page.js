import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

export default function page({
  aboutSelected,
  portfolioSelected,
  contactSelected
}) {
  return (
      <>
      <Header></Header>
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
