import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';
import { scroller } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 200,
      delay: 10,
      smooth: true,
    })
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='#' onClick={() => scrollTo("products-breakfast")}>Breakfast</SidebarLink>
        <SidebarLink to='#' onClick={()=> scrollTo('products-lunch')}>Lunch</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar