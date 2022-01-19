import React from 'react'
import './Bubble.css'
import GetRandomColor from '../../utils/GetRandomColor';

function Bubble(props) {

  const { title, salary, compratiom, headcount, id } = props.job
  const size = salary - 100
  return (
    <div className='bubble' id={id} style={{backgroundColor: GetRandomColor(),"height" : size, "width" : size, "marginLeft":"10%"}}>
      <p id={id}>{title}</p>
    </div>
  )
}

export default Bubble
