const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };


const myEmitter = new MyEmitter();

//add listener for the log Event
myEmitter.on('log',(msg)=>logEvents(msg));


setTimeout(()=>{
    myEmitter.emit('log','log event emitted!');
}, 2000);