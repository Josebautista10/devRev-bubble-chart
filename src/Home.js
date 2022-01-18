import React, { useEffect, useState } from 'react'
import Bubble from './components/Bubble'
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

  console.log(FindXYPoints(jobsData))
  console.log(FindSteps(FindXYPoints(jobsData)))

  const bubbles = jobsData.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))

  return (
    <div className='container'>
      <div className='top-half'>
        <div className='quadrant-1 quadrant' id='1'></div>
        <div className='quadrant-2 quadrant' id='2'></div>
      </div>
      <p>hello</p>
      <div className='bottom-half'>
        <div className='quadrant-3 quadrant' id='3'></div>
        <div className='quadrant-4 quadrant' id='4'></div>
      </div>
    </div>
  )
}

export default Home
