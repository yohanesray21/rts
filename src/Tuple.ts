type Coordinate3D = [x: number, y: number, z: number];

const Coordinate3D = (cor1: Coordinate3D, cor2: Coordinate3D): Coordinate3D => {
  return [cor1[0] + cor2[0], cor1[1] + cor2[1], cor1[2] + cor2[2]];
};

console.log(Coordinate3D([1, 2, 3], [4, 5, 6]));

const simpleStringTemplate = (
  initial: string
): [() => string, (nv: string) => void] => {
  return [
    () => initial,
    (nv: string) => {
      initial = nv;
    },
  ];
};

const [string, setString] = simpleStringTemplate('Yohanes');

console.log(string());
setString('Ray');
console.log(string());
