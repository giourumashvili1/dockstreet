import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>DINER</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
            <Bars />
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar