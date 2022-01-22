import axios from 'axios'
import React, { useEffect, useState } from 'react'

import DrawCanvas from './components/DrawCanvas'
import './Home.css'
import FindSteps from './utils/FindSteps'

import FindXYPoints from './utils/FindXYPoints'

function Home() {
  const [jobsData, setJobsData] = useState([])
  const endpoint = 'https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77'
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(endpoint)

      setJobsData(result.data)
    }

    fetchData()
  }, [])

  function chartSteps() {
    const xAndYValues = FindXYPoints(jobsData)
    return FindSteps(xAndYValues)
  }

  return jobsData.length > 0 ? (
    <DrawCanvas steps={chartSteps()} jobsData={jobsData} />
  ) : null
}

export default Home
