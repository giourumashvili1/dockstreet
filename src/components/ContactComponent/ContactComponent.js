import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactComponent.css';
import { GoBackButton } from '../MenuPageComponents/MenuPageElements';


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
    <div>
    <GoBackButton className='closeButton'/>
    <form ref={form} onClick={e => e.stopPropagation()} onSubmit={sendEmail}>
      <input placeholder='Name' type="text" name="user_name" />
      <input placeholder='Email' type="email" name="user_email" />
      <textarea placeholder='Message' name="message" />
      <input type="submit" value="SEND" />
      <div>{result ? <Result /> : null}</div>
    </form>

    </div>
    
  )
}

export default ContactComponent