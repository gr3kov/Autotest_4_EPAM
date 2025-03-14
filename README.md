Demonstration of Autotesting with js+WebdriverIO practical task for Epam


!!!
Description of launch project with Autotest

Demonstration of automated testing using JavaScript + WebdriverIO for launch an automative tests on mocha framework

To run automated tests, you need to set up the environment on some operation system by installing Node.js, Node Package Manager (NPM), and the WebdriverIO testing tool. You can install WebdriverIO using the following NPM command.

Follow the next steps of instruction

a) git clone https://github.com/gr3kov/Autotest_4_EPAM.git
b) cd on that directory repository
c) open terminal with original enter point directory of project. Thease directory must some like 
"C:\Autotest_4_EPAM" on Windows or "/home/Autotest_4_EPAM" on Linux
d) run wdio command with terminal command:" npx wdio run wdio.conf.js"

If you dont have some IDE or Nodejs/ NPM installed 
you must doing some next steps of instructions:
c) lets done some COPY original file with name of wdio.conf.js and package.json to another directory

d)  install Nodejs and NPM if your environment doesnt have it.

Installation Guide for Node.js and NPM  


1. Check if Node.js is Installed  

Run the following command to check if Node.js is already installed:  

###bash

node -v

npm -v

###

If the commands are not recognized, proceed with the installation.


2. Install Node.js on Windows

Download the LTS version from Node.js official website.

Run the installer and follow the setup instructions.

Verify installation with cmd or powershell terminal command:

###node -v

npm -v

###

Alternatively, install via Chocolatey windows package manager if it did not install already you must isntall it with some commands:



powershell

###

choco install nodejs -y

###3. Install Node.js on macOS

Using the official installer:



Download the LTS version from Node.js official website and install it.

Using Homebrew (recommended):



bash

###

brew install node

###

4. Install Node.js on Linux

For Ubuntu/Debian:



bash

###

sudo apt update

sudo apt install nodejs npm -y



###

For the latest version via NodeSource:



bash

###

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt install -y nodejs

###



For Arch Linux (Manjaro, EndeavourOS):



bash###

sudo pacman -S nodejs npm

###



5. Install Node.js via NVM (Recommended for Flexibility)

Install NVM (Node Version Manager):

bash

###

curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

Restart the terminal and install Node.js:

bash

###

nvm install --lts

###Verify installation:

bash

###

node -v

npm -v

###

Now Node.js and NPM are installed, and you can proceed with setting up WebdriverIO! 

Initialize a WebdriverIO Project

Save a folder structure for your test project and navigate into it:



bash



cd Autotest_4_EPAM

Initialize a new Node.js project:

###
bash

npm init -y

!!!!. Install WebdriverIO

Run the following command to install WebdriverIO using its setup wizard:


###
bash

npm init wdio@latest

The CLI will prompt you with configuration options:

Test runner: @wdio/mocha-framework 

Assertions library: @wdio/expect-webdriverio

Base URL on wedio.conf.js file must be: https://www.saucedemo.com/Once the setup is complete, WebdriverIO and its dependencies will be installed.____

bash command

npm init wdio@latest

