'use strict'

var fs = require('fs')
var test = require('tape')
var validate = require('../')

test('should validate module', function (t) {
  t.plan(1)

  var mod = fs.readFileSync('test/fixtures/module.js')

  var isValid = validate(mod)
  t.ok(isValid, 'module is valid')
})

test('should invalidate script', function (t) {
  t.plan(1)

  var mod = fs.readFileSync('test/fixtures/script.js')

  var isValid = validate(mod)
  t.ok(!isValid, 'module is invalid')
})

test('should validate indented module', function (t) {
  t.plan(1)

  var mod = fs.readFileSync('test/fixtures/indented.js')

  var isValid = validate(mod)
  t.ok(isValid, 'module is valid')
})

test('should invalidate script', function (t) {
  t.plan(1)

  var mod = fs.readFileSync('test/fixtures/too-many-args.js')

  var isValid = validate(mod)
  t.ok(!isValid, 'module is invalid')
})
