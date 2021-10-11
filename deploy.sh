#!/bin/bash

git pull

pkill node

pm2 stop src/index.js
npm install
pm2 start src/index.js
