// 
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
const totalPrice=orderedQuantity * pricePerDroid + deliveryFee

const message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}

// 
function isAdult(age) {
  // Change code below this line
  const passed = age>=18;
  // Change code above this line
  return passed;
}

// 
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === 'jqueryismyjam';

  // Change code above this line
  return isMatch;
}
