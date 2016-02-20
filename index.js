'use strict'

var nTypes = require('ast-types').namedTypes
var falafel = require('falafel')

module.exports = function (src) {
  var isValid = false

  falafel(src, function (node) {
    // start with assignment expression
    if (!nTypes.AssignmentExpression.check(node)) return

    // module.exports =
    if (!nTypes.MemberExpression.check(node.left)) return

    // function (options, send)
    if (!nTypes.FunctionExpression.check(node.right)) return

    if (!nTypes.Identifier.check(node.left.object)) return
    if (!nTypes.Identifier.check(node.left.property)) return

    var leftAssignment = node.left.object.name + '.' + node.left.property.name

    if (leftAssignment === 'module.exports' && node.right.params.length === 2) {
      isValid = true
      return
    }
  })

  return isValid
}
