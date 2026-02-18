#!/bin/bash
pkill -f "Google Chrome"
sleep 1
open -a "Google Chrome" --args --kiosk --app="http://192.168.50.220:8096/web/#/home" --profile-directory="Profile 7"
