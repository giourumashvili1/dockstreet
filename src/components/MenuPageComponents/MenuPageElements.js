import styled from "styled-components";
import { IoArrowBackCircleSharp } from 'react-icons/io5';

export const MenuPageWrapper = styled.div`
display:flex;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
background: rgba(49,49,49,0.8);





`

export const GoBackButton = styled(IoArrowBackCircleSharp)`
font-size: 3vw;
color:white;
position:absolute;
top:0;
left:20%;

@media screen and (max-width: 480px){
    font-size:10vw;
    left:2%;
    top:2%;
}

&:hover{
    cursor:pointer;
    color:grey;
}
`

export const MenuContainer = styled.div`
height: 100vh;
width: 100vw;


`

export const MenuWrapper = styled.div`
display:flex;
 flex-wrap: wrap;
 justify-content: center;
 margin: 0 auto;


`

export const Menu = styled.div`
height:100vh;
width:50%;
border: solid 5px;
border-color: red;
// background: #fffdd0;
background: rgba(0, 0, 0, 0.755);

overflow-y:scroll;

`