import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import { MdFreeBreakfast} from 'react-icons/md';

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

    @media screen and (max-width: 400px) {
        position:absolute;
        top: 10px;
        left: 25px;
    }
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
        color: black;
    }

    p{
        transform: translate(-175%, 100%);
        font-size: 28px;
    }
`

export const Bars = styled(MdFreeBreakfast)`
    font-size: 2rem;
    margin-top: -30%;
    margin-left: -35%;
    transform: translate(-50%, 15%);
    `

