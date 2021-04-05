interface Bird {
  name: string;
  color?: string;
}

const niceBird: MyCustomRequired<Bird> = {
  name: 'Nice Bird',
  color: 'Blue',
};

type MyCustomRequired<T> = {
  [P in keyof T]-?: T[P]; // Removes the optional property from every prop

  // + - modifiers can add or remove any modifier such as ? or readonly
};

function printBird(bird: MyCustomRequired<Bird>) {
  return `${bird.name} has a ${bird.color} color`;
}

const birdDesc = printBird(niceBird);
