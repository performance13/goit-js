const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Welcome!';
const isOpen = true;
const shouldConfirm = false;
console.log(message);


const type = typeof isOpen;
console.log(type);


console.log('before');
alert('confirm');
console.log('after');

// const message = 'Do you want to extend subscription?';
// const shouldRenew = confirm(message);
const shouldRenew = confirm('Do you want to extend subscription?');
console.log(shouldRenew);


// const quantity = prompt('Enter prodact quantity');
let quantity = prompt('Enter prodact quantity');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);


















