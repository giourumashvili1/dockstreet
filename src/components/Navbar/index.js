import React from 'react'
import { Nav, NavIcon, NavLink, Bars, NavImg } from './NavbarElements'



const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>DINER</NavLink> */}
        <NavIcon onClick={toggle}>
          <Bars />
          {/* <p> ≡</p> */}
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar