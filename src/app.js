const FormView = require('./views/form_view.js');
const PubSub = require('./helpers/pub_sub.js');

//event based programming the following code runs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
    formView.bindEvents();
  }
);
