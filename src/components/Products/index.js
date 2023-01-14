import React from 'react';
import Card from './Card';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
} from './ProductsElements';
import Slider from "react-slick";

var sliderSettings = {
  dots: true,
  infinite: false,
  // focusOnSelect: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4
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