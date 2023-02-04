import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { MdAddShoppingCart } from 'react-icons/md';
import { CardWrapper } from './ProductsElements';
import './Card.css';

export default function Card(props) {
  return (
    <CardWrapper>
      <MDBCard className='card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage className='card--image' src={props.img} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className='card--title'>{props.title}</MDBCardTitle>
          <MDBCardText className='card--description'>
            {props.desc}<br />
            {props.price}
          </MDBCardText>
          {/* <MDBBtn className='card--button' href=''>Add To Cart<MdAddShoppingCart className='card--description--icon' size={30} /></MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </CardWrapper>

  );
}