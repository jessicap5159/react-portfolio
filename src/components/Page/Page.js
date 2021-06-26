import About from "../About/About";
import Project from "../Project/Project";
import ContactForm from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";

export default function page({
  aboutSelected,
  portfolioSelected,
  contactSelected
}) {
  return (
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
    </div>
    
  );
}
