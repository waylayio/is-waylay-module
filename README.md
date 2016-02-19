# is-waylay-module

This module will let you know if any given script is a valid waylay module.

This module uses [https://github.com/substack/node-falafel](https://github.com/substack/node-falafel) to transform the script to an
AST and walks it recursively.

## Usage

```javascript
var fs = require('fs')
var isWaylayModule = require('is-waylay-module')

var script = fs.readFileSync('script.js')

var isValid = isWaylayModule(script)

console.log(isValid) // returns true or false

```

## Test

`npm test`
