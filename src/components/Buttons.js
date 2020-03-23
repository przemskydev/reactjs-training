import React from 'react';
import './style/Buttons.css'


const Buttons = () => {
  return (
    <div className='btnPos'>
      <button type='button'>All</button>
      <button type='button'>Active</button>
      <button type='button'>Completed</button>
      <button type='button'>Clear completed</button>
    </div>
  )
}

export default Buttons;