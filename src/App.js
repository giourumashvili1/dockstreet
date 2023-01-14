import React from "react";
import Hero from "./components/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import Products from './components/Products';
import Feature from "./components/Feature";
import Footer from "./components/Footer/Index";
import { Element } from "react-scroll";
import { imageData } from "./components/Hero/data";
import BacktoTopButton from "./components/Extras/BacktoTopButton";






function App() {

  return (
    <div>
      <GlobalStyle />
      <Hero data={imageData} />
      <Element name="products-breakfast">
        <Products heading='Popular Choices' data={productData} />
      </Element>
      <Feature />
      <Element name="products-lunch">
        <Products heading='Popular Choices' data={productDataTwo} />
      </Element>
      <Footer />
      <BacktoTopButton />
    </div>


  );
}

export default App;
