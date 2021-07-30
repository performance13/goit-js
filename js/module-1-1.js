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
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  
	if(ordered === 0){
      message = `There are no products in the order!`
    } else if(ordered > available){
      message = `Your order is too large, there are not enough items in stock!`
    } else {message = `The order is accepted, our manager will contact you`
    }
  // Change code above this line
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

//
function isNumberInRange(start, end, number) {
  const isInRange = number>=start && number<=end; // Change this line

  return isInRange;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76)); 

// 
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === `pro` || subType === `vip`; // Change this line

  return canAccessContent;
}
checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip");
checkIfCanAccessContent("free");

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

// 
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}
isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);

console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

// 
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line

  if (totalSpent >= 50000) {
    discount=GOLD_DISCOUNT;
    
  }
  else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount=SILVER_DISCOUNT;
   
  }
  else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount=BRONZE_DISCOUNT;
    
  }
  else if (totalSpent < 5000) {
    discount=BASE_DISCOUNT;
  }
  
  // Change code above this line
  return discount;
}
  
  getDiscount(137000);
  getDiscount(46900);
  getDiscount(8250);
  getDiscount(1300);
  getDiscount(5000);
  getDiscount(20000);
  getDiscount(50000);

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

// 
function checkStorage(available, ordered) {
  let message;

  // Change code below this line
  
message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// 
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
  // Change code above this line
  return message;
}

checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

// 
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
   case "starter" :// Change this line
      price = 0; // Change this line
      break;

    case "professional" : // Change this line
      price = 20; // Change this line
      break;

    case "organization" : // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

getSubscriptionPrice("professional");
getSubscriptionPrice("organization");
getSubscriptionPrice("starter");

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));

// 
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  // Change code below this line

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  
  // Change code
    switch(password) {  
    case null:
    	password = null;
    	message = `Canceled by user!`;
    	break;
      
    case ADMIN_PASSWORD:
    	password = ADMIN_PASSWORD;
    	message = `Welcome!`;
    	break;
      
       
    default:
      message = `Access denied, wrong password!`;
  }
  // Change code
  
  return message;
}

checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// 
function getShippingCost(country) {
  let message;
  // Change code below this line
  let price;
  switch (country){
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
      
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
      
      
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
      
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
      
    default:
      message = `Sorry, there is no delivery to your country`
  }
  
  
  
  // Change code above this line
  return message;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));

// 
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));

// 
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

console.log(courseTopicLength);
console.log(courseTopic[0]);
console.log(courseTopic[20]);

// 

