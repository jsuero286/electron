#!/bin/bash
pkill -f "Google Chrome"
sleep 1
open -a "Google Chrome" --args --kiosk --app=https://www.primevideo.com --profile-directory="Profile 7"
