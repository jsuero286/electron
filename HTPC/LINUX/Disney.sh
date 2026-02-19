#!/bin/bash
pkill -f "google-chrome" || pkill -f "chromium"
sleep 1
google-chrome --kiosk --app=https://www.disneyplus.com --profile-directory="Profile 1"
