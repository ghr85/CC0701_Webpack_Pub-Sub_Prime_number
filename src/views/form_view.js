//require in the ability to transmit/receive messages
const PubSub = require('../helpers/pub_sub.js');
//create the form view constructor
const FormView = function(){

  //cresate a function which binds the event to an action THAT CAN BE CALLED FROM APP.js
  FormView.prototype.bindEvents = function(){
    //create a variable that references the input
    const form = document.querySelector('#prime-checker-form');
    //listen for the submit action on the above form
    form.addEventListener('submit', (event) => {
      //stop the page refreshing which form would do by default
      event.preventDefault();
      //use console log to confirm this is working correctly
      console.log('form submitted - huzzah')
      //assign a variable to the value of the number field on submit
      const numberInput = event.target.number.value;
      //log it out to show you've got it
      console.log(numberInput);
      //Now, call on the Pubsub object and use its publish method to send number input out on channel
      PubSub.publish('FormView:number-submitted:', numberInput)
    });
  };
};
//export the form view for use in the main app
module.exports = FormView;
