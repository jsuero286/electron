#!/bin/bash
pkill -f "Google Chrome"
sleep 1
open -a "Google Chrome" --args --kiosk "file://$HOME/HTPC/Launcher.html" --profile-directory="Profile 7"
