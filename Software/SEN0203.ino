/*!
 * @file  heartrateAnalogMode.h
 * @brief  This is written for the heart rate sensor the company library. Mainly used for real 
 * @n  time measurement of blood oxygen saturation, based on measured values calculate heart rate values.
 * @copyright  Copyright (c) 2010 DFRobot Co.Ltd (http://www.dfrobot.com)
 * @license  The MIT License (MIT)
 * @author  [linfeng](Musk.lin@dfrobot.com)
 * @maintainer  [qsjhyy](yihuan.huang@dfrobot.com)
 * @version  V1.0
 * @date  2022-04-26
 * @url  https://github.com/DFRobot/DFRobot_Heartrate
 */
#include "DFRobot_Heartrate.h"
#include <Adafruit_GFX.h>      // Core graphics library
#include <Adafruit_ST7735.h>   // Hardware-specific library for ST7735
#include <SPI.h>

#define TFT_CS   4
#define TFT_RST  5
#define TFT_DC   15
#define TFT_MOSI 13 // Data out
#define TFT_SCLK 14 // Clock out

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST); // Create object for ST7735 TFT

#define heartratePin A0

DFRobot_Heartrate heartrate(ANALOG_MODE);   // ANALOG_MODE or DIGITAL_MODE

void setup() {
  Serial.begin(115200);
  tft.initR(INITR_MINI160x80_PLUGIN);  // Init ST7735S mini display
  tft.setRotation(1); // Landscape
  tft.fillScreen(ST7735_BLACK);
  tft.setTextColor(ST7735_WHITE);
  tft.setTextSize(2);
  tft.setCursor(0, 0);
  tft.println("Heart Rate Monitor");
  delay(2000);
}

void loop() {
  uint8_t rateValue;
  heartrate.getValue(heartratePin);   // A1 foot sampled values
  rateValue = heartrate.getRate();   // Get heart rate value 
  
  // Clear the area where heart rate is displayed
  tft.fillRect(0, 20, 160, 60, ST7735_BLACK);
  
  tft.setCursor(0, 20);
  tft.print("Heart Rate: ");
  tft.println(rateValue);

  delay(1000); // Update every second
}
