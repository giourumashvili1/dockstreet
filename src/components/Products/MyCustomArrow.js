import React from 'react'
import './Card.css'

function MyCustomArrow({ id, onClick }) {

  return (
    <div className='customArrow' >
      {id === 'prev' ? <button className='prevArrow' onClick={onClick}> Prev </button> : <button className='nextArrow' onClick={onClick}> Next</button>}
    </div>
  )
}

export default MyCustomArrow
