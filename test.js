/*
eslint
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const isUri = require('./')

test('absolute URIs', (assert) => {
  assert.deepEqual(
    isUri('https://example.org/absolute/URI/with/absolute/path/to/res.txt'),
    true
  )
  assert.deepEqual(isUri('ftp://example.org/resource.txt'), true)

  assert.end()
})

