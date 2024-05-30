@echo off

:: npm install uglify-js -g
:: git clone git://github.com/mishoo/UglifyJS2.git
:: uglifyjs --help
:: * -o, ¨Coutput [string]
:: * -b, ¨Cbeautify [string]
:: * -m, ¨Cmangle [string]
:: uglifyjs lazyLoad.js -m -o lazyLoad.min.js

set JS_FOLDER="%CD%\..\js\"
chdir /d %JS_FOLDER%

setlocal enabledelayedexpansion

title "Compressing the js files of %JS_FOLDER%"

for /r . %%a in (*.js) do (
  set src=%%~fa

  REM Use "!src:~-7!", not !src:~-7!
  if "!src:~-7!" neq ".min.js" (
    echo !src!
    set goal=!src:.js=.min.js!
    start /B "" uglifyjs !src! -m -o !goal!
  )
)