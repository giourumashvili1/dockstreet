import React from 'react';
import Card from './Card';
import { productData } from './data';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from './ProductsElements';
import breakfastImage from '../../images/breakfast1.jpeg';
import MyCustomArrow from './MyCustomArrow';








const Products = ({heading,data}) => {

  return (
      <ProductsContainer >
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
            {/* <MyCustomArrow/> */}
            {data.map((product,index)=>{
                return(
                   
                    <Card img={product.img} border='0' alt='slide009-png' title={product.name} desc={product.desc}/>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products