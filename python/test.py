from time import sleep
import serial
#port = '/dev/ttyACM0'
port = '/dev/ttyUSB0'
ser = serial.Serial(port, 9600) # Establish the connection on a specific port
ser.setRTS(0)  

print "Reading from " + port
while True:
	#counter +=1
	#ser.write(str(chr(counter))) # Convert the decimal number to ASCII then send it to the Arduino
	print ser.readline() # Read the newest output from the Arduino
	sleep(.1) # Delay for one tenth of a second