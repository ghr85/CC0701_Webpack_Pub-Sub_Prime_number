
//create a constructor for the PubSub helper model
const PubSub = {

  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    //use dispatchEvent to send your event out
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`subscribed to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
