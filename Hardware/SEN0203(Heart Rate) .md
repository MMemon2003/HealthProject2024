 ## SEN0203

## Pinouts
The image in figure 1 is the connection betweeen the SEN0203 heartrate sensor and the ESP8266(Node MCU). The heartrate sensor in this project has three connections with the ESP8266,(Signal,GND,VCC). 

Pinouts of the SEN0203 heartrate sensor is seen in figure 1: 
![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/dc45c64e-32d4-4db9-b616-f86a7252de67)

Figure 1

The SEN0203 heartrate  sensor operates with a range of 3.3V to 6V(5V recommended), in this project it will functioning with a 5V. 
The SEN0203 heartrate sensor will be operating with the ground of the ESP8266.
The SEN0203 heartrate sensor operates with a signal connection, Connects to an signal/data pin, which is a Analog signal/ data pin connected to d2. 

## Breadbaord connection 
The breadbaord connection of the SEN0203 and the ESP8266 is seen in figure 2.
![20240426_234147](https://github.com/MMemon2003/HealthProject2024/assets/146339735/c41f79cc-0a9f-4829-9002-b56d6c54df52)


Figure 2

## Tasmota connection 
The temperature readings will be sent to a open source firmware which uses protocol called MQTT, the firmware is called Tasmota, This server will be used to connect the SEN0203 to show on Tasmoata, the connection was shown on Tasmota by using the "Configure Module" settings, in them, The A0 pin was set to be ADC Input, from that the connection allows to be appear on the main screen of Tasmota. 


![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/7040fc49-d4e3-4324-9671-8e6b95cb2b38)







