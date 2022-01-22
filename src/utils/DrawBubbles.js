import React from 'react'
import GetRandomColor from './GetRandomColor';

function DrawBubbles(canvas, data, title) {
  
  const bubble = canvas.getContext('2d')
  const bubbleColor = GetRandomColor()
  bubble.fillStyle = `${bubbleColor}`
  bubble.strokeStyle = `${bubbleColor}`
  bubble.textAlign = 'center'
  bubble.beginPath()
  bubble.arc(
    data.foundXCoord,
    data.foundYCoord,
    `${data.salary / 3}`,
    0,
    Math.PI * 2
  )
  bubble.fill()

  const bubbleTitle = canvas.getContext('2d')
  bubbleTitle.font = '100% serif'
  bubbleTitle.fillStyle = 'black'
  bubbleTitle.textAlign = 'center'
  bubbleTitle.fillText(
    title,
    data.foundXCoord,
    data.foundYCoord
  )
}

export default DrawBubbles
