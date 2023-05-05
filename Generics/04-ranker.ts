// function ranker<RankItem>(
//   items: RankItem[],
//   rank: (v: RankItem) => number
// ): RankItem[] {
//   const ranks = items.map((item) => ({
//     item,
//     rank: rank(item),
//   }));

//   ranks.sort((a, b) => a.rank - b.rank);

//   return ranks.map((rank) => rank.item);
// }

// interface Pokemon {
//   name: string;
//   hp: number;
// }

// const poke: Pokemon[] = [
//   { name: 'bulb', hp: 20 },
//   { name: 'poke', hp: 10 },
// ];

// console.log(ranker(poke, ({ hp }) => hp));

/**
 * Reproduce Foreach with Reduce
 * Reproduce Filter with Reduce
 * Reproduce Map with Reduce
 */

// pure Foreach

let arrayOFnumber: number[] = [1, 2, 3, 4, 5];

arrayOFnumber.forEach((value) => console.log(`value ${value}`));

function myLogFunction(v: number) {
  console.log(`foreach ${v}`);
}

arrayOFnumber.reduce((acc, cur) => {
  myLogFunction(cur);
  return undefined;
}, undefined);

// For Each with reduce
const myForEach = <T>(items: T[], forEachFunc: (value: T) => void): void => {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
};

myForEach(arrayOFnumber, (v) => console.log(`reduce each ${v}`));

// pure Filter

let arrayForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayForFilter.filter((v) => v % 2 === 0));

// filter with reduce

// function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
//   return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
// }
// function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
//   return items.reduce((a: T[], v) => (filterFunc(v) ? [...a, v] : a), []);
// }
// function myFilterFunc<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
//   return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
// }

const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
};

console.log(myFilter(arrayForFilter, (v) => v % 2 === 0));

// MapFunction

const myMap = <T, K>(items: T[], mapFunction: (v: T) => K): K[] => {
  return items.reduce((a: K[], v) => [...a, mapFunction(v)], []);
};

console.log(myMap(arrayOFnumber, (v) => (v * 10).toString()));
