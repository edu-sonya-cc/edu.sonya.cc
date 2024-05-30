:: %1: The file name of js before compressing.

@echo off
:: npm i -g uglify-js

cd ..\js\

set src=%cd%\%1
set goal=%src:.js=.min.js%
:: echo %src% %goal%
:: start /B "" uglifyjs %src% -m -o %goal%
(
  uglifyjs %src% -m -o %goal%
)