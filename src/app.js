//You need to require in the modules to create bind events to listen and broadcast
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const PrimeNumber = require('./models/prime_number.js');


//event based programming the following code runs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

//run bindEvents(i.e. listen ) upon DOM load
  const formView = new FormView();
  formView.bindEvents();
//run bindEvents(i.e. listen ) upon DOM load
  const resultView = new ResultView();
  resultView.bindEvents();
//run bindEvents(i.e. listen ) upon DOM load
  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();
}
);
