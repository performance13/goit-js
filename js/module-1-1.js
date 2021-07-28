// 
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  
const totalPrice=orderedQuantity * pricePerDroid + deliveryFee

const message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

// 
function isAdult(age) {
  // Change code below this line
  const passed = age>=18;

  // Change code above this line
  return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));

// 
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password===SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}
console.log(isValidPassword('jqueryismyjam'));
console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('mangodab3st'));

// 
function checkAge(age) {
  let message;
 
  if (age >= 18) {  // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// 
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
	if(ordered>=available){
      message = `Not enough goods in stock!`
    }else{
      message = `Order is processed, our manager will contact you.`
    }
  // Change code above this line
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200,20);
checkStorage(200, 150);
checkStorage(150, 180);

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// 
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
 
  const totalPrice = customerCredits - pricePerDroid * orderedQuantity;
  
  if(totalPrice >= 0){
    message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`
  }else {
    message = `Insufficient funds!`
  }
  
  // Change code above this line
  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(500, 10, 5000);


console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(500, 10, 5000));

// 
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
checkPassword(`mangohackzor`);
checkPassword(`null`);
checkPassword(`polyhax`);
checkPassword(`jqueryismyjam`);

console.log(checkPassword(`mangohackzor`));
console.log(checkPassword(`null`));
console.log(checkPassword(`polyhax`));
console.log(checkPassword(`jqueryismyjam`));

// 
console.log(9);