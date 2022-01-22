import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bubble from './components/Bubble/Bubble'
import DrawCanvas from './components/DrawCanvas'
import './Home.css'
import FindSteps from './utils/FindSteps'

import FindXYPoints from './utils/FindXYPoints'

function Home() {
  const [jobsData, setJobsData] = useState([])
  // const [steps, setSteps] = useState([])
  const endpoint = 'https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77'
  let steps
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(endpoint)

      setJobsData(result.data)
      // setSteps(FindSteps(FindXYPoints(jobsData)))
    }

    fetchData()
  }, [])

  //
  function test() {
      const xAndYValues = FindXYPoints(jobsData)
      return FindSteps(xAndYValues)
  }

  const bubbles = jobsData.map((job, index) => (
    <Bubble job={job} id={index} key={index} />
  ))

  return jobsData.length > 0 ?  <DrawCanvas steps={test()} jobsData={jobsData}/>: null
}

export default Home
