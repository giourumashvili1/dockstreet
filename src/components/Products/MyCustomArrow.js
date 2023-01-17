import React, { useState } from 'react'
import './Card.css'

function MyCustomArrow({id,onClick}) {


   
  return (
    <div className='customArrow' >
    {id === 'prev' ? <button className='prevArrow' onClick={(e) => onClick(id,e)}> Prev </button> : <button className='nextArrow' onClick={(e) => onClick(id,e)}> Next</button>}
  </div>
  )
}

export default MyCustomArrow