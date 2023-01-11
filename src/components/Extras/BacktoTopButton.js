import React from 'react'
import { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import './BacktoTopButton.css';

function BacktoTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
        {backToTopButton && (
            <button className='BacktoTopButton' 
            onClick={scrollUp}><BsFillArrowUpCircleFill/></button>
        )}
    </div>
  )
}

export default BacktoTopButton