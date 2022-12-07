import styled from "styled-components";
import ImgBg from '../../images/background.jpeg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const HeroContent = styled.div`
 height: calc(100vh -80px);
 max-height: 100%;
 width: 100vw;
 padding: 0rem calc(100vw - 1300px) /2;

`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start
    height: 100vh;
    max-height: 100%;
    padding: 0 2 rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        wdith: 100%;
    }



 `

 export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px red;
    letter-spacing: 3px;
 `

 export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
 `

 export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        backgorund: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
 `

 export const HeroMenuHeading = styled.div`
 height: 35px;
 width: 50vw;
 background: black;
 font-size: 24px;
 border-radius: 5px;
 border: solid 5px;
 border-color: red;
 text-decoration:none;
 text-align: center;
 align-item:center;
 margin-top:15px
 `

 export const HeroMenuSign = styled.img`
  height: 210px;
  width: 150px
  margin-top: -20px;
  margin-left: 30px;
  background:rgba(255, 0, 0, 0.5);
  border-radius:5px;
  border:solid 5px;
  border-color: black;
  transition: 0.3s ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }

 `
 export const HeroMenuContainer = styled.div`
 display:flex;
 flex-wrap: wrap;
 justify-content: left;
 margin: 0 auto;
  height:89vh;
  width:50vw;
//   background: rgba(255,255,255, 0.2);
  position:absolute;
  top: 5rem;
  right:2rem;
  border-radius:2px
 `

