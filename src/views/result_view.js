// require in the PubSub controller
const PubSub = require('../helpers/pub_sub.js');

//define a resultview constructor
const ResultView = function() {

};
//so that we can add prototype functions
//bind events links the receipt of a message to an action - in effect creating our own event
//call the event from app.js which is our runner in effect
ResultView.prototype.bindEvents = function () {
  //ResultView calls a comms channel, when something is published then carry out function
  PubSub.subscribe('FormView:number-submitted:', (event) =>{
    //assign a variable to custom event detail property - mesage data
    const numberInput = event.detail;
    console.log('number sent out by form:' + numberInput);
  });

  PubSub.subscribe('PrimeNumber:result', (event) =>{
    //assign a variable to the result HTML tag
    const textReceiver = document.querySelector('#result');
    //assign subscriber data to result html tag
    textReceiver.textContent = event.detail;

  });
};

//export the Result view so that it may be used in the main app file and thus webpack
module.exports = ResultView
