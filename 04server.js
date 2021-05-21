// EventEmitter 类

let EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();

event.on('some_event', function() {
    console.log('some_event 事件触发');
})

event.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
})

setTimeout(function() {
    event.emit("some_event");
}, 1000)

event.emit('someEvent', 'arg1参数', 'arg2参数')