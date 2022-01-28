#!/bin/bash
sudo apt update

sudo apt-get install avahi-daemon avahi-discover avahi-utils libnss-mdns mdns-scan ssh sshpass

curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo npm install -g pm2

sudo apt-get install python3.6

sudo adduser ansible

pip install ansible

npm i

pm2 startup
