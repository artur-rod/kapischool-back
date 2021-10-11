#!/bin/bash

cd kapischool-back
git pull

pm2 stop src/index.js
npm install
pm2 start src/index.js
