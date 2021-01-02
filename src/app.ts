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
  // coupon = null; => this is invalid due to the fact that coupon cannot be of type null
  // coupon = undefined; => also invalid due to the fact that coupon cannot be of type undefined
  coupon = null;
}
