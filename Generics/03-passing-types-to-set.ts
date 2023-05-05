const set = new Set<number>();

set.add(1);

// set.add('abx');
// set.add({ 1: '2' });

console.log(set);

const addIdToObj = <TData>(obj: TData) => {
  return {
    ...obj,
    id: '123',
  };
};

const myObj = addIdToObj({ name: 'yohanes', last: 'Silitonga' });

console.log(myObj);
