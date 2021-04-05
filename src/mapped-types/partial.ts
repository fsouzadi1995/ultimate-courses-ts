const bigShip: Ship = {
  name: 'BigShip',
  cannons: 12,
};

type MyCustomPartial<T> = {
  [P in keyof T]?: T[P]; // make all props/keys optional
};

function updateShip<T>(ship: T, prop: MyCustomPartial<T>) {
  return { ...ship, ...prop };
}

const updatedShip = updateShip<Ship>(bigShip, { name: 'BigShip Updated!' });
