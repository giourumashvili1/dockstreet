import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroMenuSign, HeroMenuContainer, HeroMenuHeading, HeroHoursContainer, HeroHoursHeader,HeroHoursHeader2,HeroHoursDesc, } from './HeroElements';


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
                <HeroH1>Dock street Coffee Shop</HeroH1>
                <HeroP>Keep It Simple</HeroP>
                <HeroBtn>FULL MENU</HeroBtn>
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
                </HeroMenuContainer>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero