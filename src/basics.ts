let names = 'Yohanes';
let isTrue = /foo/;

console.log(names);

const splitNames: string[] = names.split('');
const myValue: Array<number> = [1, 2];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: 'Yohanes',
  last: 'Silitonga',
};

const ids: Record<number, string> = {
  10: ' a',
  20: 'b',
};

ids[30] = 'c';

console.log(ids);

const result = [1, 2, 3, 4].map((v) => v);

const fetchData = (url: string): Promise<string> =>
  Promise.resolve('Data from url');

const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
};

type MutationFunction = (v: number) => number;

const mutateArray = (numbers: number[], mutate: MutationFunction): number[] => {
  return numbers.map(mutate);
};

console.log(mutateArray([1, 20, 3], (v) => v * 10));

type AdderFunction = (num: number) => number;

const createAdder = (num: number): AdderFunction => {
  return (newNum: number) => newNum + num;
};

const addingOne = createAdder(1);
