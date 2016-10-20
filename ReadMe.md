Files and notes from International Nodebots day: 2016-07-30

- Slides from the meeting, which also give introduction to initial code: 
    - https://github.com/dtex/nbd2016
    - they are also cloned into this folder within the nbd2016 folder. Open the index.html file. 

- Other good resource are: 
    1. the JS library built for JS and Robots: http://johnny-five.io/ 
    2. Tessel introduction slides & code: http://start.tessel.io/install
    3. Where to buy kits: https://www.sparkfun.com/products/12060

- The JS files at the top level are run from the terminal by :  T2 run script.js
- The folder sumobot holds code I used to control the nodebot. 
- The folder t2-sumobot holds the code I couldn't get to work.
- The folder RC-Sumobot holds code I couldn't get to work. 
- The folder node_modules holds various modules used by the various JS scripts. 

- To run one of the scripts at the top level of this folder:
    1. see the slides at github above. 
- To run the code for the nodebot: 
1. clone the directory: git clone https://github.com/ryanjgill/sumobot.git if this is not already there. 
2. CD into that directory. 
3. run "npm install" inside the directory to install dependencies. 
4. in the terminal type "t2 run index.js", which should start the program running. 
5. at some point in the terminal, you should see "Server running at http://172.25.140.102:3000" or your bot's IP. Keep that information, you'll need to put that in the browser later to control the bot
6. Now you should push the code, so that it runs when the Tessel is not connected to your computer by USB. The code will execute on start up if not connected. type, "t2 push index.js" into the terminal. After it finishes, unplug the USB, switch to onboard battery power, and wait for the board to reboot and wifi to connect. 
7. After the blue light on the left side of the tessel2 board is solid blue and the light by the ethernet plug area is solid green, change your computer or phone wifi to be the wifi name of the bot. (starting the wifi access point on the bot was a step previously done from the slides mentioned above.) Navigate to the IP address and port from step #5 in your browser of choice. This is basically a website that your bot is serving to you through the wifi connection. You should see buttons for forward, reverse, right, and left. Clicking on these buttons will trigger the JS code running on your bot and your bot will move. 

