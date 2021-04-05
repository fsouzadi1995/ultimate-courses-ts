interface Ship {
  name: string;
  cannons: number;
}

const testShip: Ship = {
  name: 'Barca',
  cannons: 2,
};

type MyCustomReadonly<T> = {
  readonly [P in keyof T]: T[P]; // For each prop/key of T
};

function freezeShip<T>(ship: T): MyCustomReadonly<T> {
  return Object.freeze(ship);
}

const newShip = freezeShip<Ship>(testShip);
