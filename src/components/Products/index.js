import React from 'react';
import Card from './Card';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
} from './ProductsElements';
import Slider from "react-slick";
import './Card.css';
import MyCustomArrow from './MyCustomArrow';



var sliderSettings = {
  initialSlide: 0,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5500,
  cssEase: "linear",
  pauseOnHover: true,
  nextArrow: <MyCustomArrow id="next" />,
  prevArrow: <MyCustomArrow id="prev" />,
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
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
};

const Products = ({ heading, data }) => {

  return (
    <ProductsContainer >
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        <Slider {...sliderSettings}>
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
