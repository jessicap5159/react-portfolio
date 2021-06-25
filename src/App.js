import React, { useState } from 'react';
import './App.css';
import Nav from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
  <>
    
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;
