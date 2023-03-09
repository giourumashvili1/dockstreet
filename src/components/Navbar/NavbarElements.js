import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;


`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #FFFF00;

    &:hover {
        backgorund: #fff;
        transition: 0.3s ease-out;
        cursor: pointer;
        color: white;
    }

    p{
        transform: translate(-100%, 100%);
        font-size: 28px;
       
    }

    @media screen and (max-width: 650px){
            // right:-5rem;
            margin-top:-1.5rem;
        }
    
`

export const Bars = styled(FaBars)`
    font-size: 2rem;
    position: fixed !important;
    top: 5% !important;
    right: 3% !important;
    `



