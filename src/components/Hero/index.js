import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroMenuSign, HeroMenuContainer, HeroMenuHeading} from './HeroElements';


const Hero = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Dockstreet Café</HeroH1>
                <HeroP>Ready in 2 minutes</HeroP>
                <HeroBtn>Place order</HeroBtn>
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
                </HeroMenuContainer>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero