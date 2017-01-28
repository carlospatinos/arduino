from time import sleep
import serial
#port = '/dev/ttyACM0'
port = '/dev/ttyUSB0'
ser = serial.Serial(port, 9600)
#ser.port = port
#ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS #number of bits per bytes
ser.parity = serial.PARITY_NONE #set parity check: no parity
ser.stopbits = serial.STOPBITS_ONE #number of stop bits
ser.timeout = 0             #non-block read
ser.xonxoff = False     #disable software flow control
ser.rtscts = False     #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False       #disable hardware (DSR/DTR) flow control

ser.setRTS(0)  

print "Reading from " + port
while True:
	#ser.write(str(chr(counter))) # Convert the decimal number to ASCII then send it to the Arduino
	print ser.readline() # Read the newest output from the Arduino
	sleep(1) # Delay for one tenth of a second