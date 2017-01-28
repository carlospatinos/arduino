var serialport = require('serialport');
//var SerialPort = serialport.SerialPort;

// list serial ports:
//serialport.list(function (err, ports) {
  //ports.forEach(function(port) {
    //console.log(port.comName);
  //});
//});

var definedPort = '/dev/ttyACM0';
var definedPort = '/dev/ttyUSB0';

var port = new serialport(definedPort, { 
		//autoOpen: false, 
		baudRate: 9600,
		parser: serialport.parsers.readline("\n"),
    rtscts: false,
    xon: false,
    xoff: true,
    xany: false,
    flowControl:true
		//brk: false,
		//cts: false,
		//dsr: false,
    //dtr: false,
    //rts: false
  });

port.set({rts:true, dtr:false, flowControl:true}, function(err, something) {
   console.log('asserted');
});

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
});

// the open event will always be emitted
port.on('open', function() {
 console.log('Open');
});

port.on('data', function (data) {
  console.log("" + data);
});

port.on('error', function(err) {
  console.log('Error: ', err.message);
})