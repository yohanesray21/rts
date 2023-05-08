/**
 *  Given an integer n, return a counter function.
 * This counter function initially returns n and then returns 1 more than the previous value
 * every subsequent time it is called (n, n + 1, n + 2, etc).
 * */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}

const Counter = createCounter(-2);
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());

/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */

type RetObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

const createCounterObj = (init: number): RetObj => {
  let currentValue = init;
  return {
    increment: () => {
      return ++currentValue;
    },
    decrement: () => {
      return --currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    },
  };
};

const myCounterObj = createCounterObj(5);
console.log(myCounterObj.increment());
console.log(myCounterObj.reset());
console.log(myCounterObj.decrement());
