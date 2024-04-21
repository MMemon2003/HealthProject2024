 ## DS18B20

## Pinouts
The image in figure 1 is the connection betweeen the DS18B20 temperature sensor and the ESP8266(Node MCU). The temperature sensor in this project has three connections with the ESP8266,(Signal,GND,VCC).

Pinouts of the DS18B20 Temperature sensor is seen in figure 1:
![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/2f5c56ea-530f-49b4-972a-11f1d4023142)

Figure 1

The DS18B20 Temperature sensor operates with a range of 3.0V to 5.5V, in this project it will functioning with a 5.0V. 
The DS18B20 Temperature sensor will be operating with the groundd of the ESP8266. 
The DS18B20 Temperature sensor operates with a signal connection(Data pin), Connects to any data pin in the ESP8266, connected it with a D7.

## Breadbaord connection
The breadbaord connection of the DS18B20 and the ESP8266 is seen in figure 2.
![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/2f8794d1-c427-40e0-8625-bb4668eddc0a)



## Tasmota connection
The temperature readings will be sent to a open source firmware which uses protocol called MQTT, the firmware is called Tasmota. 
This server will be used to connect the DS18B20 to show on Tasmoata, the connection was shown on Tasmota by using the "Configure Module" settings. 
The D7 pin was set to be DS18B20, from that the connection allows to be appear on the main screen of Tasmota. 
![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/3708d28a-0c05-441e-a4dc-24d88c19dad8)


Figure 3 shows the connection of the DS18B20 with tasmota. 

## DS18B20 and LED connection
The DS18B20 will also be connected to a Led connection, which will be represented as whenever the temperature reading is higher than 37, the led is on and below 37, the led is off. This will be done using Ardunio, 
The data of temperature readings will be accessed from tasmota and based on the readings, the led will go on or off.
