import React, {useState,useRef}  from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import MenuPage from '../../Pages/MenuPage';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroMenuSign, HeroMenuContainer, HeroMenuHeading, HeroHoursContainer, HeroHoursHeader,HeroHoursHeader2,HeroHoursDesc, } from './HeroElements';
import './Hero.css';
import { GoBackButton } from '../MenuPageComponents/MenuPageElements';


const Hero = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);




  const windowSize = useRef([window.innerWidth, window.innerHeight])
  useEffect( ()=> {
    
      if(windowSize.current[0] >= 1920){
        setIsBigScreen(true)
      } else{
        setIsBigScreen(false)
      }
    })
  


  const toggle = () => {
    setIsOpen(!isOpen)
  }

const menuButtonHandler = ()=>{
  setIsClicked(!isClicked);

  if(!isClicked){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
}
  return (
    
    <HeroContainer >
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent >
            <HeroItems>
                <HeroH1>Dock street Coffee Shop</HeroH1>
                <HeroP>Keep It Simple</HeroP>
                <HeroBtn onClick={menuButtonHandler}>FULL MENU</HeroBtn>
                <HeroHoursContainer>
                  <HeroHoursHeader>Hours:</HeroHoursHeader>
                  <HeroHoursDesc>Open 7 days a week <br/>6:30am - 1:30pm <br/><HeroHoursHeader2>Address:</HeroHoursHeader2>2 Dock Street, Edgartown<br/>TEL : (508) 627-5232 </HeroHoursDesc>
                </HeroHoursContainer>
                <HeroMenuContainer>
                <HeroMenuHeading >Specials</HeroMenuHeading>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img1
                  )
                })}/>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img2
                  )
                })}/>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img3
                  )
                })}/>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img4
                  )
                })}/>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img5
                  )
                })}/>
                <HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img6
                  )
                })}/>

                {isBigScreen && [<HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img7
                  )
                })}/>,<HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img8
                  )
                })}/>,<HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img9
                  )
                })}/>,<HeroMenuSign src={data.map((element,index)=>{
                  return(
                    element.img10
                  )
                })}/>]}
                </HeroMenuContainer>
            </HeroItems>
        </HeroContent>
            {isClicked && (<div className='modal--window'>
              <div onClick={menuButtonHandler} className='overlay'>
              <MenuPage/>
              <GoBackButton onClick={menuButtonHandler}/>
              </div>
              </div>
               )}
    </HeroContainer>
  )
}

export default Hero