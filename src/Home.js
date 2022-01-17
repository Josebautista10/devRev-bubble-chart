import React, { useEffect, useState } from 'react'

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

  const jobs = jobsData.map((e, index) => {
    return <li key={index}>
      <p>Title:{e.title}</p>
      <p>Salary:{e.salary}</p>
      <p>Compratio:{e.compratio}</p>
      <p>Headcount:{e.headcount}</p>
    </li>
  })
  return <ul>{jobs}</ul>
}

export default Home
