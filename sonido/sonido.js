var context;
var osc;

function inicio(){
context = new (window.AudioContext || window.webkitAudioContext)();
osc = context.createOscillator(); // instantiate an oscillator
osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
osc.frequency.value = 440; // Hz
osc.connect(context.destination); // connect it to the destination
osc.start(); // start the oscillator
} 

function fin(){

osc.stop();
}
