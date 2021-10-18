#!/bin/bash

cd kapischool-back
git pull

sudo pm2 stop API-Kapi
sudo npm install
sudo pm2 start API-Kapi
