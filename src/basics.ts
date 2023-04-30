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
