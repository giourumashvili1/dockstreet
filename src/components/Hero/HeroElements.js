import styled from "styled-components";
import ImgBg from '../../images/background.jpeg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 650px){
      width:100vw;
  }
`

export const HeroContent = styled.div`
 height: calc(100vh -80px);
 max-height: 100%;
 width: 100vw;
 padding: 0rem calc(100vw - 1300px) /2;
 @media screen and (max-width: 650px){
  width:100vw;
}

`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start
    height: 100vh;
    max-height: 100%;
    padding: 0 2 rem;
    width: 45%;
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
    @media screen and (max-width: 650px){
      width:100vw;
  }
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

    @media screen and (max-width: 650px){
      width:100vw;
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
 margin-top:15px;


 @media screen and (max-width: 1372px){
  opacity: 0;
}
 
 `

export const HeroMenuSign = styled.img`
  height: 210px;
  width: 150px
  margin-top: -20px;
  margin-left: 3%;
  background:rgba(255, 0, 0, 0.5);
  border-radius:5px;
  border:solid 5px;
  border-color: black;
  transition: 0.3s ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
  @media screen and (max-width: 1372px){
    opacity: 0;
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

export const HeroHoursContainer = styled.div`
 justify-content:center;
 margin-top:10vh;
 width:33.9vw;
 height:30vh;
 border: solid 5px;
 border-color: red;
 background: #fffdd0;

@media screen and (max-width: 480px){
  width:60vw;
  height:auto;
}
`

export const HeroHoursHeader = styled.h1`
justify-content:center;
text-align: center;
color:red;



@media screen and (max-width: 1440px){
  font-size:21px;
},
@media screen and (max-width: 1325px){
  font-size:20px;
},
@media screen and (max-width: 650px){
  font-size:15px;
}

`
export const HeroHoursHeader2 = styled.h1`
justify-content:center;
text-align: center;
color:red;
margin-top:5px;


@media screen and (max-width: 1440px){
  font-size:21px;
  margin-top:10px;
},
@media screen and (max-width: 1325px){
  font-size:20px;
},
@media screen and (max-width: 650px){
  font-size:15px;
}

`

export const HeroHoursDesc = styled.h2`
justify-content: center;
text-align:center;
padding-top: 10px;
color: black;

@media screen and (max-width: 1940px){
  font-size:22px;
},
@media screen and (max-width: 1325px){
  font-size:20px;
},
@media screen and (max-width: 650px){
  font-size:15px;
}

`

