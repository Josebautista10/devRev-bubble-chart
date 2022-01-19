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
  for (let i = XObj.min; i < XObj.max; i+=XObj.step) {
    xAxisSteps.push(i)
  }
  
  for (let i = YObj.min; i < YObj.max; i+=YObj.step) {
    yAxisSteps.push(i)
  }

  const lengthOfXAxisArr = Math.floor(xAxisSteps.length /2)
  const leftXAxisSteps = xAxisSteps.slice(0, lengthOfXAxisArr)
  const rightXAxisSteps = xAxisSteps.slice(lengthOfXAxisArr)
  
  const lengthOfYAxisArr = Math.floor(yAxisSteps.length /2)
  const bottomYAxisSteps = yAxisSteps.slice(0, lengthOfYAxisArr)
  const topYAxisSteps = yAxisSteps.slice(lengthOfYAxisArr)

  
  console.log(bottomYAxisSteps,topYAxisSteps);
  return {leftXAxisSteps,rightXAxisSteps, bottomYAxisSteps, topYAxisSteps}
}

export default FindSteps