// type MyFlexibleDog = {} & Record<string, string>;
type MyFlexibleDog = {
  name: string;
  [key: string]: string | number;
};

const myDog: MyFlexibleDog = {
  name: 'hero',
  color: 'orange',
  age: '7',
};

console.log(myDog);
