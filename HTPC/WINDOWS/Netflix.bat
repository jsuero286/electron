@echo off
taskkill /f /im chrome.exe 2>nul
timeout /t 2 /nobreak >nul
start "" "chrome" --kiosk --app=https://www.netflix.com --profile-directory="HTPC"
