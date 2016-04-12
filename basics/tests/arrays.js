import test from 'blue-tape'

import {
    matchEnds,
    xLetterFirst,
    sortByLast,
} from './../exercises/arrays'

test('matchEnds function', (t) => {
  t.equal(matchEnds(['aba', 'xyz', 'aa', 'x', 'bbb']), 3)
  t.equal(matchEnds(['', 'x', 'xy', 'xyx', 'xx']), 2)
  t.equal(matchEnds(['aaa', 'be', 'abc', 'hello']), 1)

  t.end()
})

test('xLetterFirst function', (t) => {
  t.deepEqual(xLetterFirst(['bbb', 'ccc', 'axx', 'xzz', 'xaa']), ['xaa', 'xzz', 'axx', 'bbb', 'ccc'])
  t.deepEqual(xLetterFirst(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']), ['xaa', 'xcc', 'aaa', 'bbb', 'ccc'])
  t.deepEqual(
        xLetterFirst(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']),
        ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
    )

  t.end()
})

test('sortByLast function', (t) => {
  t.deepEqual(sortByLast([[1, 3], [3, 2], [2, 1]]), [[2, 1], [3, 2], [1, 3]])
  t.deepEqual(sortByLast([[2, 3], [1, 2], [3, 1]]), [[3, 1], [1, 2], [2, 3]])
  t.deepEqual(
        sortByLast(([[1, 7], [1, 3], [3, 4, 5], [2, 2]]), [[2, 2], [1, 3], [3, 4, 5], [1, 7]])
    )

  t.end()
})
