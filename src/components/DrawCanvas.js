import React, { useEffect, useRef, useState } from 'react'
import './DrawCanvas.css'
import DrawBubbles from '../utils/DrawBubbles'

function DrawCanvas(props) {
  const { xAxis, yAxis } = props.steps
  const { jobsData } = props
  const [canvasWidth, setCanvasWidth] = useState([window.innerWidth])
  const [canvasHeight, setCanvasHeight] = useState([window.innerHeight])
  const numberOfXSteps = xAxis.length
  const numberOfYSteps = yAxis.length
  const spacingYAxis = Math.round(window.innerHeight / numberOfYSteps - 2)
  const spacingXAxis = Math.round(window.innerWidth / numberOfXSteps - 2)
  const reversedYAxis = yAxis.reverse()

  const canvasRef = useRef(null)
  const halfOfWindowWidth = canvasWidth / 2
  const halfOfWindowHeight = canvasHeight / 2
  
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    
    const drawCanvas = () => {
      const line = canvas.getContext('2d')

      // Y-axis
      line.beginPath()
      line.moveTo(halfOfWindowWidth, 0) //from (half width, 0)
      line.lineTo(halfOfWindowWidth, canvasHeight) // (half width, full height)
      line.stroke()
      
      // X-axis
      line.beginPath()
      line.moveTo(0, halfOfWindowHeight) //from (0, half height)
      line.lineTo(canvasWidth, halfOfWindowHeight) // to (full width, half height)
      line.stroke()

      const steps = canvas.getContext('2d')
      //  Y-axis steps
      const yCoords = {}
      for (let i = 1; i <= numberOfYSteps; i++) {
        steps.beginPath()
        steps.moveTo(halfOfWindowWidth - 10, spacingYAxis * i) //from (0, half height)
        steps.lineTo(halfOfWindowWidth + 10, spacingYAxis * i) // to (full width, half height)
        steps.stroke()
        steps.font = '150% serif'
        steps.fillText(
          reversedYAxis[i - 1],
          halfOfWindowWidth + 15,
          spacingYAxis * i
        )
        yCoords[reversedYAxis[i - 1]] = spacingYAxis * i
      }

      //  X-axis steps
      const xCoords = {}
      for (let i = 1; i <= numberOfXSteps; i++) {
        steps.beginPath()
        steps.moveTo(spacingXAxis * i, halfOfWindowHeight - 10) //from (0, half height)
        steps.lineTo(spacingXAxis * i, halfOfWindowHeight + 10) // to (full width, half height)
        steps.stroke()
        steps.font = '150% serif'
        steps.fillText(
          xAxis[i - 1],
          spacingXAxis * i - 10,
          halfOfWindowHeight - 20
        )
        xCoords[xAxis[i - 1]] = spacingXAxis * i
      }

      const findBubbleAxis = (job) => {
        const closestX = xAxis.reduce((a, b) => {
          return Math.abs(b - job.compratio) < Math.abs(a - job.compratio)
            ? b
            : a
        })

        const closestY = yAxis.reduce((a, b) => {
          return Math.abs(b - job.headcount) < Math.abs(a - job.headcount)
            ? b
            : a
        })
        
        const foundXCoord = xCoords[closestX]
        const foundYCoord = yCoords[closestY]
        const salary = job.salary
        return { foundXCoord, foundYCoord, salary }
      }

      for (let i = 0; i < jobsData.length; i++) {
        const bubbleCoords = findBubbleAxis(jobsData[i])
        DrawBubbles(canvas, bubbleCoords, jobsData[i].title)
      }
    }
    drawCanvas()
    window.addEventListener('resize', () => {
      setCanvasWidth(window.innerWidth)
      setCanvasHeight(window.innerHeight)
      canvas.width = canvasWidth
      canvas.height = canvasHeight
      drawCanvas()
    })
  }, [])

  return <canvas ref={canvasRef} className='canvas' data-testid={'canvas'}></canvas>
}

export default DrawCanvas
