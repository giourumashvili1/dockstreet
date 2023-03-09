import React from 'react'
import './Gallery.css';
import { images } from './galleryData';

function Gallery() {
    return (
        <div className="grid-container">
          {images.map((image, index) => (
            <div className="grid-item" key={index}>
              <img className='grid-img' src={image.url} alt={image.description} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      );
    };

export default Gallery