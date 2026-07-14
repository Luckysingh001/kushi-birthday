@echo off
title Kushi's Birthday Surprise
echo Starting Kushi's birthday website...
start "Kushi Birthday Server" cmd /k py -m http.server 4173 --directory "%~dp0"
timeout /t 2 /nobreak >nul
start "" http://localhost:4173
