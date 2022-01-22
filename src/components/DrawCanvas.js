import React, { useEffect, useRef, useState } from 'react'
import './DrawCanvas.css'
function DrawCanvas(props) {
  const { xAxis, yAxis } = props.steps
  const numberOfXSteps = xAxis.length
  const numberOfYSteps = yAxis.length
  const spacingYAxis = Math.round(window.innerHeight / numberOfYSteps)
  const spacingXAxis = Math.round(window.innerWidth / numberOfXSteps)
  const reversedYAxis = yAxis.reverse()
  console.log(yAxis[0]);
  

  const canvasRef = useRef(null)
  const halfOfWindowWidth = window.innerWidth / 2
  const halfOfWindowHeight = window.innerHeight / 2

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')
    // Y-axis
    ctx.beginPath()
    ctx.moveTo(halfOfWindowWidth, 0) //from (half width, 0)
    ctx.lineTo(halfOfWindowWidth, window.innerHeight) // (half width, full height)
    ctx.stroke()
    // X-axis
    ctx.beginPath()
    ctx.moveTo(0, halfOfWindowHeight) //from (0, half height)
    ctx.lineTo(window.innerWidth, halfOfWindowHeight) // to (full width, half height)
    ctx.stroke()
    
    const steps = canvas.getContext('2d')
    //  Y-axis steps
    for (let i = 1; i <= numberOfYSteps; i++) {
      steps.beginPath()
      steps.moveTo(halfOfWindowWidth - 10, spacingYAxis * i) //from (0, half height)
      steps.lineTo(halfOfWindowWidth + 10, spacingYAxis * i) // to (full width, half height)
      steps.stroke()
      steps.font = '150% serif'
      steps.fillText(reversedYAxis[i-1], halfOfWindowWidth + 15, spacingYAxis * i)
    }

    for (let i = 1; i <= numberOfXSteps; i++) {
      steps.beginPath()
      steps.moveTo( spacingXAxis * i, halfOfWindowHeight - 10) //from (0, half height)
      steps.lineTo( spacingXAxis * i,halfOfWindowHeight + 10) // to (full width, half height)
      steps.stroke()
      steps.font = '150% serif'
      steps.fillText(xAxis[i-1], spacingXAxis * i - 10, halfOfWindowHeight - 20,)
    }
  }, [])

  return <canvas ref={canvasRef} className='canvas'></canvas>
}

export default DrawCanvas
