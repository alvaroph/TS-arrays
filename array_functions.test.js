// VERSION 1--> esto funciona con module.exports const array_length = require('./array_function');
import {
    arrayLength,
    arrayPush,
    arrayPop
} from './array_function.js';

test('arrayLength de [1,2,3] es 3', () => {
  expect(arrayLength([1,2,3])).toBe(3);
});

test('arrayPush de [1,2,3] y 3 es [1,2,3,4]', () => {
    expect(arrayPush([1,2,3],4)).toStrictEqual([1,2,3,4]);
  });

  test('arrayPop de [1,2,3] es [1,2]', () => {
    expect(arrayPop([1,2,3])).toStrictEqual([1,2]);
  });