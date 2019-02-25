# Codeclan Week 07 Day 01
## Introduction to WebPack and PubSub pattern
### Solo Lab/Homework

You've been tasked with creating a web app which uses multiple JS files and needs to be bundled using webpack. This one page web app should accept a number and output whether or not this is a prime number.

#### Order of Approach

* Draw a diagram of the views and the models and the data passed between each

* Set up your directory structure to accommodate

* Now, you'll need to set up webpack - where's your entry point? npm install? npm build run? Is watcher watching?

* Decide who needs to publish and who needs to subscribe and to what - what is the data flow?

* Pub Sub helper is easy enough to copy - make sure you understand what it's doing

* Pub Sub provides almost a transactional functionality enabling you to have a centralised communication relay. You can use the PubSub helper to create custom events and channels on which to communicate data as a result of those events.

* Pub Sub uses CustomEvent to create a custom event containing a channel and data, it then uses dispatchEvent to broadcast that  message to any addEventListeners who would 'tune into' that channel and receive that data.

* To reiterate, plan, draw your diagram, then you'll know which views are sending and receiving data - and who's doing the processing.

* One you know how your data is moving you can decide what you want to do with it - calculate, process, modify DOM.




#### Notes
* Use the console log - every step of the way if need be, you can follow the messages you're passing around.

* Keep the idea of a middle man in mind. PubSub is the middle man(helper function) used to communicate between abstracted components of a functional whole.

* remember context is important you'll need to use this to call functions from within functions within the same model

* Eat. You get whingy when you don't eat.


#### files
