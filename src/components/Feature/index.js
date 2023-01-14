import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Breakfast Special </h1>
      <p>Two Eggs over easy, bacon, french toasts, home fries</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature