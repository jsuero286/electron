#!/bin/bash

pkill -f "Google Chrome"
sleep 2

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
--kiosk \
--app=https://www.netflix.com \
--profile-directory="Profile 7"
