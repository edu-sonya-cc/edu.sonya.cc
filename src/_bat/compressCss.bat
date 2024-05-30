@echo off
:: https://www.npmjs.com/package/uglifycss uglifycss - npm
:: http://www.symfonychina.com/doc/current/assetic/uglifyjs.html
:: http://camnpr.com/archives/1007.html

:: npm i -g uglifycss
:: git clone git://github.com/fmarcia/UglifyCSS.git
:: uglifycss [options] [filename] [...] > output

set CSS_FOLDE=%CD%\..\css\
chdir /d "%CSS_FOLDE%"
title "Compressing the css files of %CSS_FOLDER%"

setlocal enabledelayedexpansion

for /r . %%a in (*.css) do (
  set src=%%~fa

  REM Use "!src:~-8!", not !src:~-8!
  if "!src:~-8!" neq ".min.css" (
    echo !src!
    set goal=!src:.css=.min.css!
    start /B "" uglifycss !src! > !goal!
  )
)