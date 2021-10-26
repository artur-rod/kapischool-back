#!/bin/bash

cd kapischool-back

rm -r package-lock.json

git pull

sudo pm2 stop ./src/index.js
sudo npm install
sudo pm2 start ./src/index.js
