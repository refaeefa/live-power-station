@echo off
rem محطة الطاقة الحيّة - تشغيل على ويندوز (بملء الشاشة). للخروج: Alt+F4
set "URL=file:///%~dp0..\app\index.html"
start "" msedge --app="%URL%" --start-fullscreen 2>nul
if errorlevel 1 start "" chrome --app="%URL%" --start-fullscreen
