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
  `${number} is not a prime number`
}
};
