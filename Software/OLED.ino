#include <Adafruit_GFX.h>      // Core graphics library
#include <Adafruit_ST7735.h>   // Hardware-specific library for ST7735
#include <SPI.h>               
#include <OneWire.h>           // Library for OneWire communication protocol
#include <DallasTemperature.h> // Library for Dallas Temperature sensor
#include <Wire.h>               // Library for I2C communication
#include "DFRobot_Heartrate.h" // Library for Heart-Rate Sensor

#define TFT_CS   4
#define TFT_RST  5
#define TFT_DC   15
#define TFT_MOSI 13 // Data out
#define TFT_SCLK 14 // Clock out

#define ONE_WIRE_BUS 2    // DS18B20 Temperature sensor pin
#define heartratePin A0   // SEN0203 Heart rate pin

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST); // Create object for ST7735 TFT
OneWire oneWire(ONE_WIRE_BUS); // Setup a oneWire instance to communicate with DS18B20
DallasTemperature sensors(&oneWire); // Pass the oneWire reference to Dallas Temperature sensor
DFRobot_Heartrate heartrate(DIGITAL_MODE); // Instantiate the heart rate sensor with digital mode

float temperature = 0.0; // Variable to store temperature reading
float heartRate;   // Variable to store heart rate reading

// Function to draw text
void testdrawtext(const char *text, uint16_t color, uint8_t size) {
  tft.setTextSize(size);
  tft.setTextColor(color);
  tft.setTextWrap(true);
  tft.setCursor(0, 0);
  tft.print(text);
}

void setup() {
  Serial.begin(115200);
  Serial.println(F("Hello! ST77xx TFT Test"));

  tft.initR(INITR_MINI160x80_PLUGIN);  // Init ST7735S mini display
  tft.setRotation(1); // Landscape
  tft.fillScreen(ST7735_BLACK);
  testdrawtext("GP Virtual   System", ST7735_RED, 2); // Bigger font

  // Initialize temperature sensor
  sensors.begin();
  sensors.setResolution(12); // Set the sensor resolution to 12-bit (can be adjusted if needed)

  delay(2000);
}

void loop() {
  // Read temperature sensor
  sensors.requestTemperatures(); // Request temperature from DS18B20 sensor
  float newTemperature = sensors.getTempCByIndex(0); // Get the temperature in Celsius

  // Read heart rate sensor
  uint8_t rateValue;
  heartrate.getValue(heartratePin);   // A1 foot sampled values
  rateValue = heartrate.getRate();   // Get heart rate value 

  // Check if temperature or heart rate has changed
  if (newTemperature != temperature || rateValue != heartRate) {
    temperature = newTemperature;
    heartRate = rateValue;

    // Update the screen with new values
    tft.fillScreen(ST7735_BLACK);
    tft.setCursor(0, 0);
    tft.setTextColor(ST7735_YELLOW);
    tft.setTextSize(2);
    tft.print("Temperature: ");
    tft.println(temperature);
    tft.print("Heart Rate: ");
    tft.println(heartRate);
  }

  delay(20);
}
