import React, { useEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(window.innerWidth / 2, 0) //from (half width, 0)
    ctx.lineTo(window.innerWidth / 2, window.innerHeight) // (half width, full height)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, window.innerHeight / 2) //from (0, half height)
    ctx.lineTo(window.innerWidth, window.innerHeight / 2) // to (full width, half height)
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef}></canvas>
}

export default App
