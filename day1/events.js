// var events=require('events');
// var eventEmitter= new events.EventEmitter();
// function ringBell()
// {
//     console.log("ring ring ring");
// }
// eventEmitter.on('doorOpen',ringBell);//on for binding
// eventEmitter.emit('doorOpen');       // emit for firing






//direct callback
const EventEmitter=require('events');
var emitter=new EventEmitter;

emitter.on("myevent",(arg1,arg2)=>{
    console.log("id is"+arg1+"and name is"+arg2)
});


emitter.emit('myevent',1,'rahul');
