## What is Tasmota 
Tasmota is an open-source platform for ESP32-S3 and Node MCU-based devices which allows smart devices to communicate to wireless network protocol called MQTT. 

## Use of Tasmoata in the project 
In this project, a cloud service called Azure is where the MQTT port was created in the networking of Azure Cloud Service. The Tasmota was successfully connected to Node MCU, Temperature (DS18B20), and Heart rate (SEN0203) sensors were used in Tasmota  which can be seen in Figure 2&4.  
The pin out of the DS18B20 can be seen in hardware folder "DS18B20.md" and the SEN0203 Heart rate sensor can be seen in hardware folder "SEN00203.md".


 ![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/4b124b77-b7e4-4947-acfd-8e2af0c69f2d)

Figure 11 – Working screen of Tasmota 

## Steps to config Node MCU to Tasmota:
1)	Download the Esptool and tasmota.bin file
2)	Open Command Prompt, find the directory or cmd the directory from the folder where everything is downloaded.
3)	If used, erase the chip using the command “esptool.exe --port <COM port> erase_flash”
4)	After, upload the firmware using the command “esptool.exe --port COM5 write_flash -fs 1MB -fm dout 0x0 tasmota.bin”.
5)	Open network settings, a tasmota WIFI access point with an SSID of tasmota -xxxxx-xxxxx.


![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/67753694-4620-43d2-b6e4-307421822c18)

Figure 12 – Example of an SSID of tasmota -xxxxx-xxxxx.

   
6)	Click the SSID, once the screen of tasmota showing the available networks, seen in Figure 13.

![image](https://github.com/MMemon2003/HealthProject2024/assets/146339735/ad26276c-eeb6-4338-a34a-c0a75c5a0a97)

 
Figure 13 – Available networks Wi-Fi connection for tasmota

7)	Wait for it, once an IP address shows, note it down as it will be the IP address to use tasmota each time with Node MCU(ESP8266). IP address used for tasmota: http://192.168.43.210. 




Figure 15: Successful IP address connection to access Tasmota 

8)	Config the Sensors, the sensors I had to configure were the DS18B20 at D4 to set to be DS18 x 20 and to configure the SEN0203 at A0, which was set to be an ADC Input. The successful connection of both sensors operating on Tasmota is shown in Figure 4 & 2. 
9)	Click save and the sensors pops on the screen. 
