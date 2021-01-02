console.log('Greetings 🧙');
console.log('Spell!');

/**
 *  Implicit vs Explicit types
 */

let something; /* Since something is declared without a type nor a value it has a
                  inferred type of Any */

something = true;

something = 15;

something = 'I am something';

let implicitTyping = 'pizza'; // implicitTyping now has implicited that it's a string
let explicitTyping: string = 'pizzaDiscount'; // explicitTyping has been declared of type string

let alsoExplicit: string; // alsoExplicit is also of explicit type string although unassigned

/**
 *
 */
