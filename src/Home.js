import React, { useEffect, useState } from 'react'
import Bubble from './components/Bubble/Bubble'
import './Home.css'
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

  console.log(FindSteps(FindXYPoints(jobsData)))

  // const xAxisSteps = FindSteps(FindXYPoints(jobsData)).xAxisSteps.map(
  //   (step, index) => (
  //     <div key={index} className='x-axis-steps'>
  //       <p>|</p>
  //       <p>{step}</p>
  //     </div>
  //   )
  // )

    const leftXAxisSteps = FindSteps(FindXYPoints(jobsData)).leftXAxisSteps.map(
    (step, index) => (
      <div key={index} className='x-axis-steps'>
        <p>|</p>
        <p>{step}</p>
      </div>
    )
  )

  const rightXAxisSteps = FindSteps(FindXYPoints(jobsData)).rightXAxisSteps.map(
    (step, index) => (
      <div key={index} className='x-axis-steps'>
        <p>|</p>
        <p>{step}</p>
      </div>
    )
  )

const topYAxisSteps = FindSteps(FindXYPoints(jobsData)).topYAxisSteps.reverse().map(
  (step, index) => (
    <div key={index} className='y-axis-steps'>
      <p>-{step}</p>
    </div>
  )
)
const bottomYAxisSteps = FindSteps(FindXYPoints(jobsData)).bottomYAxisSteps.reverse().map(
  (step, index) => (
    <div key={index} className='y-axis-steps'>
      <p>-{step}</p>
    </div>
  )
)

  const bubbles = jobsData.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))
console.log(bubbles[0])
  return (
    <div className='container'>
      <div className='top-half'>
        <div className='quadrant-1 quadrant' id='1'>
          {bubbles[0]}
        </div>
        <div className='quadrant-2 quadrant' id='2'>
        <div className='y-axis'>{topYAxisSteps}</div>

        </div>
      </div>
      <div className='bottom-half'>
        <div className='quadrant-3 quadrant' id='3'>
          <div className='x-axis'>{leftXAxisSteps}</div>
        </div>
        <div className='quadrant-4 quadrant' id='4'>
        <div className='x-axis'>{rightXAxisSteps}</div>
          <div className='y-axis'>{bottomYAxisSteps}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
