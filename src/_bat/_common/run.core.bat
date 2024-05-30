@ECHO OFF

SET json=%cd%\%1%
if "%2%" == "min" (
  set json=%json%.min
)
SET json=%json%.json
:: ECHO %json% 

title "%json%"
:: setlocal enabledelayedexpansion

SET PYTHONPATH=P:\anqi\Desktop\tech\python\projects\tools\dev\tools\

call %PYTHONPATH%venv\Scripts\activate.bat
python %PYTHONPATH%main.py -F openUrlAndExportPdf -I %json%

PAUSE