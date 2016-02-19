'use strict'

var _get = require('lodash.get')
var falafel = require('falafel')

module.exports = function (src) {
  var isValid = false

  falafel(src, function (node) {
    // start with assignment expression
    var isAssignment = node.type === 'AssignmentExpression'
    if (!isAssignment) return

    // module.exports = function (options, send)
    var right = _get(node, 'right')
    if (!right) return

    var rightIsFunctionExpression = right.type === 'FunctionExpression'
    if (!rightIsFunctionExpression) return

    var rightParams = right.params
    if (!rightParams) return

    var leftProperty = _get(node, 'left.object.name') + '.' + _get(node, 'left.property.name')
    if (!leftProperty) return

    if (leftProperty === 'module.exports' &&
        rightIsFunctionExpression &&
        rightParams.length === 2) {
      isValid = true
      return
    }
  })

  return isValid
}
