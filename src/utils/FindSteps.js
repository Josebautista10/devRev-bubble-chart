function FindSteps(data) {
  const {compratio, headcount} = data
  const xAxisSteps = []
  const yAxisSteps = []

  const XObj = {
    min: Math.min(...compratio),
    max: Math.max(...compratio),
    step: Math.floor((Math.max(...compratio) - Math.min(...compratio)) / compratio.length)
  }
  
  const YObj = {
    min: Math.min(...headcount),
    max: Math.max(...headcount),
    step: Math.floor((Math.max(...headcount) - Math.min(...headcount)) / compratio.length)
  }
  for (let i = XObj.min - XObj.step; i <= XObj.max + XObj.step; i+=XObj.step) {
    i < 0 ? xAxisSteps.push(0) : xAxisSteps.push(i)
  }
  
  for (let i = YObj.min; i <= YObj.max; i+=YObj.step ) {
    i < 0 ? yAxisSteps.push(0) : yAxisSteps.push(i)
  }

  const lengthOfXAxisArr = Math.floor(xAxisSteps.length /2)
  const leftXAxisSteps = xAxisSteps.slice(0, lengthOfXAxisArr)
  const rightXAxisSteps = xAxisSteps.slice(lengthOfXAxisArr)
  
  const lengthOfYAxisArr = Math.floor(yAxisSteps.length /2)
  const bottomYAxisSteps = yAxisSteps.slice(0, lengthOfYAxisArr)
  const topYAxisSteps = yAxisSteps.slice(lengthOfYAxisArr)

  
  return {leftXAxisSteps,rightXAxisSteps, bottomYAxisSteps, topYAxisSteps}
}

export default FindSteps