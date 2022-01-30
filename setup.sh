#!/bin/bash
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -

sudo apt update

sudo apt-get install -y avahi-daemon avahi-discover avahi-utils libnss-mdns mdns-scan ssh sshpass python3 python3-pip nodejs

sudo npm install -g pm2

pip3 install ansible

npm i

pm2 startup
