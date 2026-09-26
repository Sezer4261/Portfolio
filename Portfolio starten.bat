@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Installiere Abhaengigkeiten ...
  call npm install
)
echo Portfolio startet auf http://localhost:4200 - zum Beenden dieses Fenster schliessen.
call npx ng serve --port 4200 --open
pause
