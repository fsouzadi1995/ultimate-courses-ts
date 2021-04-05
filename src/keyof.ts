const animal = {
  name: 'Tiger',
  age: 25,
};

type Animal = typeof animal;
type AnimalKeys = keyof Animal; // "name" | "age" UNION
type AnimalTypes = Animal[AnimalKeys]; // string | number --- Equivalent => type keys = typeof animal[keyof typeof animal];

// K is a subtype of AnimalKeys, which means it has to be either "name" or "age"
// T is already a typeof something, in this case typeof animal

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const animalName = getProperty(animal, 'name'); // string
const animalAge = getProperty(animal, 'age'); // number
// const animalFake = getProperty(animal, 'fake'); // doesn't work because "fake" doesn't extend keyof animal
