import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);
  };

  return (
    <section>
      <h1 className="fancy-header">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-name">
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="contact-email">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="Email" id="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label id="message">Message:</label>
          <textarea name="Message" rows="4" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className="button">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;