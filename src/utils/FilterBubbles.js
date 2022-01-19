import React from 'react'
// compratio = x
// headcount = y
function FilterBubbles(jobs, xAxisObj, yAxisObj) {
  const { leftXAxis, rightXAxis } = xAxisObj
  const { bottomYAxis, topYAxis } = yAxisObj
  console.log(xAxisObj, yAxisObj)
  // console.log('bottomYAxis', bottomYAxis,'topYAxis', topYAxis);
const quadrants = {
  quadrant1:[],
  quadrant2:[],
  quadrant3:[],
  quadrant4:[]
}
  const quadrant1 = []
  const quadrant2 = []
  const quadrant3 = []
  const quadrant4 = []

  jobs.forEach((job) => {
    if (job.compratio < rightXAxis[0] && job.headcount > bottomYAxis[0]) {
      quadrants.quadrant1.push(job)
    }

    if (
      job.compratio > leftXAxis[leftXAxis.length - 1] &&
      job.headcount > bottomYAxis[0]
    ) {
      quadrants.quadrant2.push(job)
    }

    if (
      job.compratio > leftXAxis[leftXAxis.length - 1] &&
      job.headcount < topYAxis[0]
    ) {
      quadrants.quadrant3.push(job)
    }

    if (job.compratio < rightXAxis[0] && job.headcount < topYAxis[0]) {
      quadrants.quadrant4.push(job)
    }
  })
  console.log(quadrants);
  
  return quadrants
}

export default FilterBubbles
