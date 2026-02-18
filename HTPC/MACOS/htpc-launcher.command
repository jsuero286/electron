#!/bin/bash
APP="$1"

case "$APP" in
  Netflix) ~/HTPC/Netflix.command ;;
  Disney) ~/HTPC/Disney.command ;;
  Prime) ~/HTPC/Prime.command ;;
  HBO) ~/HTPC/HBO.command ;;
  YouTube) ~/HTPC/YouTube.command ;;
  Crunchyroll) ~/HTPC/Crunchyroll.command ;;
  AppleTV) ~/HTPC/AppleTV.command ;;
  Kick) ~/HTPC/Kick.command ;;
  Jellyfin) ~/HTPC/Jellyfin.command ;;
esac
