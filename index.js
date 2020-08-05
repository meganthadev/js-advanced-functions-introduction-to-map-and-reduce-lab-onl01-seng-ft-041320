function mapToNegativize(sourceArray) {
  return sourceArray.map(element => {
    return -element
  })
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(element => {
    return element
  })
}

function mapToDouble(sourceArray) {
  return sourceArray.map(element => {
    return element * 2
  })
}

function mapToSquare(sourceArray) {
  return sourceArray.map(element => {
    return element * element
  })
}

function reduceToTotal(sourceArray, startingPoint=0) {
  return sourceArray.reduce(function (accum, currentValue) {
    return accum + currentValue
  }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
  let truth = true 
  sourceArray.forEach(element => {
    if (element === false) {
      truth = false
    }
})
 return truth
}

function reduceToAnyTrue(sourceArray) {
  let truth = false
  sourceArray.forEach(element => {
    if (element === true) {
      truth = true
    }
  })
  return truth
}
