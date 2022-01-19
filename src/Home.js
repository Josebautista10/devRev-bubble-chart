import React, { useEffect, useState } from 'react'
import Bubble from './components/Bubble/Bubble'
import './Home.css'
import FilterBubbles from './utils/FilterBubbles'
import FindSteps from './utils/FindSteps'

import FindXYPoints from './utils/FindXYPoints'

function Home() {
  const [jobsData, setJobsData] = useState([])
  const endpoint = 'https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77'

  useEffect(() => {
    getData()
    async function getData() {
      const response = await fetch(endpoint)
      const data = await response.json()
      setJobsData(data)
    }
  }, [])
  const leftXAxis = FindSteps(FindXYPoints(jobsData)).leftXAxisSteps
  const rightXAxis = FindSteps(FindXYPoints(jobsData)).rightXAxisSteps
  const bottomYAxis = FindSteps(FindXYPoints(jobsData)).bottomYAxisSteps
  const topYAxis = FindSteps(FindXYPoints(jobsData)).topYAxisSteps
  

  const leftXAxisSteps = leftXAxis.map((step, index) => (
    <div key={index} className='x-axis-steps'>
      <p>|</p>
      <p>{step}</p>
    </div>
  ))

  const rightXAxisSteps = rightXAxis.map((step, index) => (
    <div key={index} className='x-axis-steps'>
      <p>|</p>
      <p>{step}</p>
    </div>
  ))

  const topYAxisSteps = [...topYAxis].reverse().map((step, index) => (
    <div key={index} className='y-axis-steps'>
      <p>-{step}</p>
    </div>
  ))
  const bottomYAxisSteps = bottomYAxis.reverse().map((step, index) => (
    <div key={index} className='y-axis-steps'>
      <p>-{step}</p>
    </div>
  ))

  const bubbles = jobsData.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))

  const quadrants = FilterBubbles(jobsData, { leftXAxis, rightXAxis }, { topYAxis, bottomYAxis })
  
  const q1 = quadrants.quadrant1.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))
  const q2 = quadrants.quadrant2.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))
  const q3 = quadrants.quadrant3.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))
  const q4 = quadrants.quadrant4.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))
  return (
    <div className='container'>
      <div className='top-half'>
        <div className='quadrant-1 quadrant' id='1'>
          {q1}
        </div>
        <div className='quadrant-2 quadrant' id='2'>
          <div className='y-axis'>{topYAxisSteps}</div>
          {q2}
        </div>
      </div>
      <div className='bottom-half'>
        <div className='quadrant-3 quadrant' id='3'>
          <div className='x-axis'>{leftXAxisSteps}</div>
          {q3}
        </div>
        <div className='quadrant-4 quadrant' id='4'>
          <div className='x-axis'>{rightXAxisSteps}</div>
          <div className='y-axis'>{bottomYAxisSteps}</div>
          {q4}
        </div>
      </div>
    </div>
  )
}

export default Home
