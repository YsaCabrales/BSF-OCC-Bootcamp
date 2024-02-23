let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;

// Way to compute total
cart = (shirt * 2) + shoes + pants + (sunglasses * 3);

// or

// cart += shirt * 2;
// cart += shoes;
// cart += pants;
// cart += sunglasses * 3;

console.log('Total: $', cart);

let discount = cart * 0.10;

cart -= discount;

console.log('with 10% discount: $', cart);
