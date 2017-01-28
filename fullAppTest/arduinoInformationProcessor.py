from time import sleep
import serial
import json
import requests

url = "http://localhost:3000/api/data"
f = open("arduinoData.txt", "w")

# splitting temperature, pressure and altitude
def persistRawDataInMongo(rawData):
	valueAsList = rawData.split(';')
	valueAsList.remove(valueAsList[3])
	data = {}
	for temperaturePressureAltitude in valueAsList:
		singleValue = temperaturePressureAltitude.split('=')
		meassurementIdentifier = singleValue[0];
		meassurementValue = singleValue[1];
		if meassurementIdentifier == "T":
			data['temperature'] = meassurementValue
			data['temperatureUnit'] = "Celcius"
		if meassurementIdentifier == "P":
			data['pressure'] = meassurementValue
			data['pressureUnit'] = "millibars"

		if meassurementIdentifier == "A":
			data['altitude'] = meassurementValue
			data['altitudeUnit'] = "meters"
	json_data = json.dumps(data)
	headers = {'Content-type': 'application/json'}
	try:
		response = requests.post(url, data=json_data, headers=headers)
		#print json_data
		f.write( str(json_data) + "\n" )
	except requests.exceptions.RequestException as e:
		 print "Rest Service problem: %s" % e
		 f.close()
	f.flush()


def startReadingFromPort( port ):
	print "Reading from %s" % port
	ser = serial.Serial(port, 9600) # Establish the connection on a specific port
	ser.setRTS(0) 

	# T=14.50;P=990.97;A=187.12;
	while True:
		rawData = ser.readline() # Read the newest output from the Arduino
		persistRawDataInMongo(rawData)
		sleep(.1) # Delay for one tenth of a second
	f.close()


#port = '/dev/ttyACM0'
port = '/dev/ttyUSB0'
startReadingFromPort(port)