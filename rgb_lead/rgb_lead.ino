// Define Pins
#define RED 3
#define GREEN 5
#define BLUE 6

#define delayTime 10 // fading time between colors


void setup()
{
pinMode(RED, OUTPUT);
pinMode(GREEN, OUTPUT);
pinMode(BLUE, OUTPUT);
digitalWrite(RED, HIGH);
digitalWrite(GREEN, HIGH);
digitalWrite(BLUE, HIGH);
}

// define variables
int redValue;
int greenValue;
int blueValue;


// main loop
void loop()
{
  analogWrite(RED, 0);
  analogWrite(GREEN, 0);
  analogWrite(BLUE, 0);
  delay(1000);
  
  analogWrite(RED, 0);
  analogWrite(GREEN, 0);
  analogWrite(BLUE, 255);
  delay(5000);
}
