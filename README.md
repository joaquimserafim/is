# is.uri

verifies if a given string is a valid Uniform Resource Identifier

----
<a href="https://nodei.co/npm/is.uri/"><img src="https://nodei.co/npm/is.uri.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/is.uri)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/is.uri/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/is.uri/blob/master/package.json#L38)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


**NOTE:** currently doesn't support URNs

### api
`const isUri = require('is.uri')`

*isUri(some_string)* - returns a boolean


### example

```js
const isUri = require('is.uri')

isUri('https://example.org/absolute/URI/with/absolute/path/to/res.txt')
// return true
```


#### ISC License (ISC)