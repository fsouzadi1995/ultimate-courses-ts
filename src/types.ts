/**
 * Never type
 */

// Can be used when our function never returns something or when an error is thrown
function throwError(err: string): never {
  throw new Error(err);
  // never going to return a value
}

/**
 * Null, undefined and strict null checks
 */

// let coupon: string = 'pizza25'; => this coupon cannot be assigned null
let coupon: string | null = 'pizza25';

/**
 * Union and literal types
 */

let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

// selectSize('larger'); => illegal because function selectSize() size param cannot take the value 'larger'
selectSize('small');

/**
 * Function types
 */

let sumOrder: Function;
sumOrder = (price: number, qty: number = 1): number => price * qty; // Valid

let sumOrderTwo: (price: number, qty: number) => number;
sumOrderTwo = (x, y) => x * y; // Also valid

let sumOrderThree: (price: number, qty: number) => number = (x, y) => x * y; // Also valid

/**
 * Object types
 */

// Object type has to match properties and methods on assignment
let pizza: { name: string; price: number; getName(): string } = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return pizza.name;
  },
}; // Valid

/* Invalid because pizza is reassigned but doesn't implement the getName() method  */
// pizza = { name: 'Anchovies', price: 15 };

/**
 * Tuple types for arrays
 */

let nicePizza: [string, number, boolean];

nicePizza = ['Pepperoni', 2, true];
// nicePizza = [true, 'Pepperoni', 2]; => Invalid because doesn't respect the order of the tuple type
// nicePizza = ['Pepperoni', 2]; => Invalid because doesn't respect the amount of elements inside the tuple
