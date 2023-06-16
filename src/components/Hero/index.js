import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import MenuPage from '../../Pages/MenuPage';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroMenuSign, HeroMenuContainer, HeroMenuHeading, HeroHoursContainer, HeroHoursHeader, HeroHoursHeader2, HeroHoursDesc, } from './HeroElements';
import './Hero.css';
import { GoBackButton } from '../MenuPageComponents/MenuPageElements';


const Hero = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);




  const windowSize = useRef([window.innerWidth, window.innerHeight])
  useEffect(() => {

    if (windowSize.current[0] >= 1920) {
      setIsBigScreen(true)
    } 
    if(windowSize.current[0] >= 1020){
      setIsDesktop(true)
    }
    if(windowSize.current[0] <= 650){
      setIsDesktop(false)
    }
  })



  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const menuButtonHandler = () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && isClicked) menuButtonHandler();
  });

  const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (

    <HeroContainer >
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent >
        <HeroItems>
          <HeroH1>Dock street Coffee Shop</HeroH1>
          <HeroP>Keep It Simple</HeroP>
          <HeroBtn onClick={()=>{
            scrollUp();
            menuButtonHandler();
          }}>FULL MENU</HeroBtn>
          <HeroHoursContainer>
            <HeroHoursHeader>Hours:</HeroHoursHeader>
            <HeroHoursDesc>Open 7 days a week <br />6:30am - 1:30pm <br /></HeroHoursDesc><HeroHoursHeader2>Address:</HeroHoursHeader2><HeroHoursDesc>2 Dock Street, Edgartown<br />TEL : (508) 627-5232 </HeroHoursDesc>
          </HeroHoursContainer>
          {isDesktop && 
          <HeroMenuContainer>
            <HeroMenuHeading >Specials</HeroMenuHeading>
            <HeroMenuSign loading="lazy"src={data[0].img1} />
            <HeroMenuSign loading="lazy" src={data[0].img2} />
            <HeroMenuSign loading="lazy" src={data[0].img3} />
            <HeroMenuSign loading="lazy" src={data[0].img4} />
            <HeroMenuSign loading="lazy" src={data[0].img5} />
            <HeroMenuSign loading="lazy" src={data[0].img6} />
          
            {isBigScreen && [<HeroMenuSign src={data[0].img7} />,
            <HeroMenuSign loading="lazy" src={data[0].img8} />,
            <HeroMenuSign loading="lazy" src={data[0].img9} />,
            <HeroMenuSign loading="lazy" src={data[0].img10} />]}
          </HeroMenuContainer>
          }
        </HeroItems>
      </HeroContent>
      {isClicked && (<div className='modal--window'>
        <div onClick={menuButtonHandler} className='overlay'>
          <MenuPage />
          <GoBackButton onClick={menuButtonHandler} />
        </div>
      </div>
      )}
    </HeroContainer>
  )
}

export default Hero