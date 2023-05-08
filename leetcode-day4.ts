/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

function map(array: number[], fn: (n: number, i: number) => number): number[] {
  return array.map(fn);
}

const example1 = map([1, 2, 3], (num) => num + 1);
console.log(example1);

const example2 = map([1, 2, 3], (num, i) => num + i);
console.log(example2);

const example3 = map([1, 2, 3], () => 42);
console.log(example3);
