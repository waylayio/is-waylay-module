module.exports = function (options, send) {
  var random = Math.random()
  var side = (Math.floor(random * 6) + 1)

  var state
  switch (side) {
    case 1:
      state = 'one'
      break
    case 2:
      state = 'two'
      break
    case 3:
      state = 'three'
      break
    case 4:
      state = 'four'
      break
    case 5:
      state = 'five'
      break
    case 6:
      state = 'six'
      break
  }

  var value = {
    observedState: state.toUpperCase(),
    rawData: { randomValue: random }
  }

  send(null, value)
}
