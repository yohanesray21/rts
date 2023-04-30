interface Coord {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coord): Coord;
function parseCoordinate(x: number, y: number): Coord;

function parseCoordinate(arg1: unknown, arg2?: unknown): Coord {
  let newCoord: Coord = {
    x: 0,
    y: 0,
  };

  if (arg1 instanceof Object) {
    newCoord = arg1 as Coord;
  } else {
    newCoord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return newCoord;
}

console.log(parseCoordinate(1, 2));
console.log(parseCoordinate({ x: 1, y: 2 }));
