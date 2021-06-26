import About from "../About";
import Project from "../Project";
import ContactForm from "../Contact";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

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
