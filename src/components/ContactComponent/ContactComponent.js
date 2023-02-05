import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactComponent.css';

const Result = () => {
  return (
    <p>Your message has been sent successfully</p>
  )
}

function ContactComponent() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgadebf', 'template_16s38x1', form.current, '7XAnt_lf9AcQD2wYp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };
  return (
    <form ref={form} onClick={e => e.stopPropagation()} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <div>{result ? <Result /> : null}</div>
    </form>
  )
}

export default ContactComponent