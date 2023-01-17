import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useRef } from 'react';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
} from './ProductsElements';
import Slider from "react-slick";
import './Card.css';
import { ClassNames } from '@emotion/react';
import MyCustomArrow from './MyCustomArrow';



var sliderSettings = {
  initialSlide:0,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        focusOnSelect: true,
        slidesToShow: 2.23,
        slidesToScroll: 2,
      }
    }
  ]
};

const Products = ({ heading, data }) => {

const [currentSlide, setCurrentSlide] = useState(0);

const onClickHandler = (id,e) => {
    e.preventDefault();
    if(!sliderRef || !sliderRef.current) return;
    if (id === "prev") {
        sliderRef.current.slickPrev();
    } else {
        sliderRef.current.slickNext();
    }
};
const sliderRef = useRef(null);

  return (
    <ProductsContainer >
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        <Slider ref={sliderRef} {...sliderSettings} nextArrow={<MyCustomArrow id='next'  onClick={onClickHandler}/>} prevArrow ={<MyCustomArrow id='prev' onClick={onClickHandler} />}>
          {data.map((product, index) => {
            return (

              <Card key={index} img={product.img} border='0' alt='slide009-png' title={product.name} desc={product.desc} price={product.price} />
            )
          })}
        </Slider>
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products