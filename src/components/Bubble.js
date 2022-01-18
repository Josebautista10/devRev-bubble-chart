import React from 'react'
import './Bubble.css'
import GetRandomColor from '../utils/GetRandomColor';

function Bubble(props) {

  const { title, salary, compratiom, headcount, id } = props.job

  return (
    <div className='bubble' id={id} style={{backgroundColor: GetRandomColor()}}>
      <p id={id}>{title}</p>
    </div>
  )
}

export default Bubble
