console.log('Greetings 🧙');
console.log('Spell!');

/**
 *  Implicit vs Explicit types
 */

let something; // no type supplied nor value assigned means something is inferred of type any

something = true; // valid because of type any

something = 15; // valid because of type any

something = 'I am something'; // valid because of type any

let implicitTyping = 'pizza'; // implicitTyping now has implicited that it's a string
let explicitTyping: string = 'pizzaDiscount'; // explicitTyping has been declared of type string

let alsoExplicit: string; // alsoExplicit is also of explicit type string although unassigned

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

// Impure function
function removeCoupon() {
  // coupon = null; => this is illegal due to the fact that coupon cannot be of type null
  // coupon = undefined; => also illegal due to the fact that coupon cannot be of type undefined
  coupon = null;
}

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
// nicePizza = [true, 'Pepperoni', 2]; => Invalid because doesn't respect the order inside the tuple type
// nicePizza = ['Pepperoni', 2]; => Invalid because doesn't respect the amount of elements inside the tuple
