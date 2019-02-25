const PubSub = require('../helpers/pub_sub.js')
const PrimeNumber = function(){

};


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

PrimeNumber.prototype.primeResult = function (number) {

if (this.numberIsPrime(number) === true){

  return `${number} is a prime number`
} else{

  return `${number} is not a prime number`
}
};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted:', (event) => {
    const numberInput = event.detail;
    const result = this.primeResult(numberInput);
console.log(result)
    PubSub.publish('PrimeNumber:result', result);
  });
};

module.exports = PrimeNumber;
