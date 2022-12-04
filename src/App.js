import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import Products from './components/Products';
import Feature from "./components/Feature";
import Footer from "./components/Footer/Index";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Products heading='Popular Choices' data={productData}/>
      <Feature/>
      <Products heading='Lunch Munch' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
