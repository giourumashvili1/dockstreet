import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
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
                <HeroH1>Breakfast Café</HeroH1>
                <HeroP>Ready in 2 minutes</HeroP>
                <HeroBtn>Place order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero