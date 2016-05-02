import test from 'tape-catch'

import {
  map,
  fibGenerator,
  filter,
} from './../exercises/functions'

test('map', (t) => {
  t.deepEqual(
    map([1, 2, 3], x => x * x),
    [1, 4, 9],
    'It works for numbers'
  )
  t.deepEqual(
    map(['foo', 'bar', 'baz'], x => x.toUpperCase()), ['FOO', 'BAR', 'BAZ'],
    'It works for strings'
  )
  t.deepEqual(map(['a', 'b', 'c'], x => x + x), ['aa', 'bb', 'cc'], 'It works for concatenation')
  t.end()
})


test('fibGenerator', (t) => {
  const gen = fibGenerator()
  t.ok(typeof gen === 'function', 'generator is function')
  t.deepEqual(
    (new Array(10)).fill(null).map(() => gen()),
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    'It generates fibonaccy secequence'
  )
  t.end()
})

test('filter', (t) => {
  t.deepEqual(
    filter([1, 2, 3, 4, 5], x => x % 2 !== 0),
    [1, 3, 5],
    'It filters odd values'
  )
  t.deepEqual(
    filter([true, null, undefined, 'foo', 42], x => !!x),
    [true, 'foo', 42],
    'It filters false values'
  )
  t.end()
})
