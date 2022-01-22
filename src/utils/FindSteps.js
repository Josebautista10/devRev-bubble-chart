function FindSteps(data) {
  const {compratio, headcount} = data
  const xAxis = []
  const yAxis = []

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
  for (let i = 0; i <= XObj.max; i+=XObj.step) {
    xAxis.push(i)
  }
  
  for (let i = 0; i <= YObj.max; i+=YObj.step) {
    yAxis.push(i)
  }
  yAxis.reverse()

  
  return {xAxis,yAxis}
}

export default FindSteps