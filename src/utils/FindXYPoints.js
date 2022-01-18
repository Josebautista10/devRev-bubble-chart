import React from 'react'

function FindXYPoints(data) {
  const compratio = data.map((e) => e.compratio).sort((a, b) => a - b)
  const headcount = data.map((e) => e.headcount).sort((a, b) => a - b)
  return {compratio, headcount}
}

export default FindXYPoints
