var serialport = require('serialport');

var receivedData = "";
var definedPort = '/dev/ttyACM0';
var definedPort = '/dev/ttyUSB0';
serialPort = new serialport(definedPort, {
    // defaults for Arduino serial communication
  baudrate: 9600,
  databits: 8,
  stopbits: 1,
  parity: 'none',
  flowcontrol: false,
  buffersize: 255
});
serialPort.on('data', function (data) {
  console.log("" + data);
});