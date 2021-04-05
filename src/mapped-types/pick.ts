interface Beast {
  name: string;
  age: number;
  details: {};
}

type MyCustomPick<T, K extends keyof T> = {
  [P in K]: T[P]; // Where P is a prop/key of the union props of T
};

// K has typechecking, can't mistype properties
const randomBeast: MyCustomPick<Beast, 'name' | 'age'> = {
  name: 'randomBeast',
  age: 10,
};
