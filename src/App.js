import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import Products from './components/Products';
import Feature from "./components/Feature";
import Footer from "./components/Footer/Index";
import { Element } from "react-scroll";
import { imageData } from "./components/Hero/data";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero data={imageData} />
      <Element name="products-breakfast">
        <Products heading='Popular Choices' data={productData} />
      </Element>
      <Feature />
      <Element name="products-lunch">
      <Products heading='Lunch Specials' data={productDataTwo} />
      </Element>
      <Footer />
    </Router>
  );
}

export default App;
