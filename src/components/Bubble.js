import React from 'react'
import './Bubble.css'
import GetRandomColor from '../utils/GetRandomColor';

function Bubble(props) {
  // const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  // console.log(randomColor);

  console.log(props.job)
  const { title, salary, compratiom, headcount, id } = props.job

  return (
    <div className='bubble' id={id} style={{backgroundColor: GetRandomColor()}}>
      <p id={id}>{title}</p>
    </div>
  )
}

export default Bubble
