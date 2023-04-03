import React from 'react';
import {useNavigate} from 'react-router-dom';
import './About.css';
import Image1 from '../images/dock-street-image.jpeg';
import { GoBackButton } from '../components/MenuPageComponents/MenuPageElements';

function About() {

  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
  return (
    <div className="about-container">
        <GoBackButton onClick={routeChange} loading="lazy" className='goBackButton'/>
      <h1>About Us</h1>
      <div className="image-container">
        <img className='image-1' src={Image1} loading="lazy" alt="Image 1" />
        <p className="image-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod tempor est sed suscipit. Donec convallis quam eget leo pulvinar, ac sollicitudin lorem eleifend.</p>
      </div>
      <div className="address-container">
        <h2>📍Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46922.96510133228!2d-70.56375753965752!3d41.38944475658769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89f7b58e1b040001%3A0xd8ca94462fbb4dc!2s2%20Dock%20St%2C%20Edgartown%2C%20MA%2002539%2C%20USA!5e0!3m2!1sen!2sin!4v1658115551872!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default About;
