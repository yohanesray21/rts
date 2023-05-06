interface Cat {
  name: string;
  breed: string;
}

const makeACat = (name: string, breed: string): Readonly<Cat> => {
  return {
    name,
    breed,
  };
};

let myCat = makeACat('manis', 'jojo');
console.log(myCat);

console.log(myCat);

const make3DCoordinates = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};

const D3 = make3DCoordinates(1, 2, 3);
// D3[1] = 0;
console.log(D3);

const pureConst = [1, 2, 3] as const;
// pureConst[1] = 1

const a = [1, 2, 3, 4, 'a'];

const [user, ...others] = a;
console.log(user);
console.log(others);

const b = [...a, 1];
console.log(b);
