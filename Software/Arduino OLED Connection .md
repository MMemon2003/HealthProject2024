## OLED Connection on Ardunio 

#include <Adafruit_GFX.h>    // Core graphics library
#include <Adafruit_ST7735.h> // Hardware-specific library for ST7735
#include <SPI.h>

#define TFT_CS        4
#define TFT_RST       5
#define TFT_DC         15
#define TFT_MOSI 13 // Data out
#define TFT_SCLK 14 // Clock out

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST); // Create object for ST7735 TFT

// Function to draw text
void testdrawtext(const char *text, uint16_t color) {
  tft.setCursor(0, 0);
  tft.setTextColor(color);
  tft.setTextWrap(true);
  tft.print(text);
}

// More Text sizes and Colors
void tftPrintTest() {
  tft.setRotation(1); // Landscape
  tft.setTextWrap(false);
  tft.fillScreen(ST7735_BLACK);
  tft.setCursor(0, 0);
  tft.setTextColor(ST7735_RED);
  tft.setTextSize(1);
  tft.println("Hello World!\n");
  tft.setTextColor(ST7735_YELLOW);
  tft.setTextSize(2);
  tft.println("Hello World!\n");
  tft.setTextColor(ST7735_GREEN);
  tft.setTextSize(3);
  tft.println("Hello!");
  tft.setTextColor(ST7735_BLUE);
}

void setup() {
  // Some debug info to Serial Module -- not required
  Serial.begin(9600);
  Serial.println(F("Hello! ST77xx TFT Test"));

  tft.initR(INITR_MINI160x80_PLUGIN);  // Init ST7735S mini display
  Serial.println(F("Initialized"));

  // Print some text
  tft.fillScreen(ST7735_BLACK);
  testdrawtext("Hello World!", ST7735_WHITE); // Simplified text
  delay(4000);
  tftPrintTest();

  // Loads more text and drawing functions in Adafruit Examples
}


void loop() {
  // Nothing here for now
}
