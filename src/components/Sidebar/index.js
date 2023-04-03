import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';
import { scroller } from 'react-scroll';
import { GoBackButton } from '../MenuPageComponents/MenuPageElements';
import ContactComponent from '../ContactComponent/ContactComponent';

import './Sidebar.css'

const Sidebar = ({ isOpen, toggle }) => {
  const [isClicked, setIsClicked] = useState(false);

  const contactButtonHandler = () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && isClicked) contactButtonHandler();
  });

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 200,
      delay: 10,
      smooth: true,
    })
  }

  return (
    <div>

      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to='#' onClick={() => scrollTo("products-breakfast")}>Breakfast</SidebarLink>
          <SidebarLink to='#' onClick={() => scrollTo('products-lunch')}>Lunch</SidebarLink>
          {/* <SidebarLink to='/menu'>Full Menu</SidebarLink> */}
          <SidebarLink to='/gallery'>Gallery</SidebarLink>
          <br />
          <SidebarLink to='/about' >About</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={contactButtonHandler} to='/'>CONTACT US</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>

      {isClicked && (<div className='modal--window'>
        <div onClick={contactButtonHandler} className='overlay'>
          <ContactComponent onClick={contactButtonHandler} />
        </div>
      </div>
      )}


    </div>

  )
}

export default Sidebar