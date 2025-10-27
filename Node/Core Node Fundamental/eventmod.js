const Eve = require('events');
const { url } = require('inspector');

const emitter = new Eve();

emitter.on('messageLogged',(arg)=>{
    console.log('listener called',arg);
})
//make noise   --signaling event happened
emitter.emit('messageLogged',{id : 1 , url : 'http://'  });



