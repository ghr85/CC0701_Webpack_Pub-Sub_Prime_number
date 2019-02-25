const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const PrimeNumber = require('./models/prime_number.js');
const PubSub = require('./helpers/pub_sub.js');

//event based programming the following code runs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();
}
);
