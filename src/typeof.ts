typeof []; // 'object'
typeof null; // 'object'

const person = {
  name: 'Fabián',
  age: 25,
};

type Person = typeof person;

// Javascript
// typeof person => 'object'

const anotherPerson: Person = {
  name: 'Martín',
  age: 12,
};
