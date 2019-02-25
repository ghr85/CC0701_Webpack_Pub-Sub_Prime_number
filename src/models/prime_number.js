//require in the PubSub as you'll eed to broadcast the result out to other modules
const PubSub = require('../helpers/pub_sub.js')

//begin constructor
const PrimeNumber = function(){

};

//logic for calculating a prime number was provided
PrimeNumber.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

//return a string depending on result of prime number
PrimeNumber.prototype.primeResult = function (number) {
  if (this.numberIsPrime(number) === true){
    return `${number} is a prime number`
  } else{
    return `${number} is not a prime number`
  }
};

//interact with the other components, subscribe to number process and publish
PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted:', (event) => {
    const numberInput = event.detail;
    const result = this.primeResult(numberInput);
    PubSub.publish('PrimeNumber:result', result);
  });
};
//export module so that it can be called in main app and thus webpack
module.exports = PrimeNumber;
