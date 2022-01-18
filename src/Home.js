import React, { useEffect, useState } from 'react'
import Bubble from './components/Bubble'
import './Home.css'

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
  console.log(jobsData)

  const bubbles = jobsData.map((job, index) => <Bubble job={job} id={index} />)
  
  return (
    <div className='container'>
      {/* <div className="box red" ></div>
        <div className="box stack-top blue" ></div> */}
      {bubbles}
    </div>
  )
}

export default Home
