## Link to access the website on the internet like my laptop:
http://localhost/project/index.html

Steps to access the website on the internet like my laptop:
1) Dowwnload Xampp from this link https://sourceforge.net/projects/xampp/
2) Download MySQL from this link https://www.mysql.com/downloads/
3) Create a SQL database on SQL Workbench
4) Create the PHP code that reads the SQL database
5) Configure Xampp, Start the SQL and Apache server
6) once everything goes well, open browser, write localhost/name of the project all the php and html are in/index/html

** Things to note: **
All html,php,style,css and script.js fiies are in the location of Xampp/htdocs/name of the project 
The main page must be named as index,html

## Link to access the website on the Internet like any smartphone 
192.168.43.233/project

1) Find your computer's IP address
2) Start XAMPP services
3) Move website files in the correct directory within XAMPP's htdocs folder.(C:\xampp\htdocs on Windows).
4) Configure Apache
5) Access the website from another device from the computers IP address followed by the name of your website or the name of the folder where your website files are located (computer IP address/mywebsite)


** Things to note: **
The IP adddress must be on the computer where Xampp is installed 
The phone's and Laptop wifi connetion needs to be the same
Xonfig Apache using Xampp Control panel, if the website has configurations (like virtual hosts), make sure they are set up correctly in the Apache configuration files (httpd.conf, httpd-vhosts.conf, etc.).
However, if you're using the default setup, this step may not be necessary.



