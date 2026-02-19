@echo off
taskkill /f /im chrome.exe 2>nul
timeout /t 2 /nobreak >nul
rem Cambia la IP por la de tu servidor Jellyfin
start "" "chrome" --kiosk --app=http://192.168.50.220:8096/web/#/home --profile-directory="HTPC"
