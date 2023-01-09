import React from 'react';
import Card from './Card';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
} from './ProductsElements';









const Products = ({heading,data}) => {

  return (
      <ProductsContainer >
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
            {data.map((product,index)=>{
                return(
                   
                    <Card img={product.img} border='0' alt='slide009-png' title={product.name} desc={product.desc} price={product.price}/>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products