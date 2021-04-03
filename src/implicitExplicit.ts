// Implicit vs Explicit types

let something; // no type supplied nor value assigned means something is inferred of type any

something = true; // valid because of type any

something = 15; // valid because of type any

something = 'I am something'; // valid because of type any

let implicitTyping = 'pizza'; // implicitTyping now has implicited that it's a string
let explicitTyping: string = 'pizzaDiscount'; // explicitTyping has been explicitly declared of type string

let alsoExplicit: string; // alsoExplicit is also of explicit type string although unassigned
