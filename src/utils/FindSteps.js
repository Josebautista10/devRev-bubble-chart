import React from 'react'
import FindXYPoints from './FindXYPoints'

function FindSteps(data) {
  const {compratio} = data
  const X = {
    min: Math.min(...compratio),
    max: Math.max(...compratio),
    step: Math.floor((Math.max(...compratio) - Math.min(...compratio)) / compratio.length)
  }
  return X
}

export default FindSteps