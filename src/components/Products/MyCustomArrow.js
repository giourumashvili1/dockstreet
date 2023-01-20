import React from 'react'
import './Card.css'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

function MyCustomArrow({ id, onClick }) {

  return (
    <div className='customArrow' >
      {id === 'prev' ? <button className='prevArrow' onClick={onClick}> <MdArrowBackIosNew/> </button> : <button className='nextArrow' onClick={onClick}> <MdArrowForwardIos/></button>}
    </div>
  )
}

export default MyCustomArrow
