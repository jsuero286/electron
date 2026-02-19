#!/bin/bash
pkill -f "google-chrome" || pkill -f "chromium"
sleep 1
# Cambia la IP por la de tu servidor Jellyfin
google-chrome --kiosk --app=http://192.168.50.220:8096/web/#/home --profile-directory="Profile 1"
