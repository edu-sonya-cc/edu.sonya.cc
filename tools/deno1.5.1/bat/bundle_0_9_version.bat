@ECHO OFF
set src=version
set mid=..\es3_%src%.ts
set goalMid=..\..\..\src\js\%src%_mid.js
set goal=..\..\..\src\js\%src%.js
echo const [_diagnostics, actual] = await Deno.bundle('../../../src/ts/%src%.ts', undefined, { target: 'es3' });console.log(actual);>%mid%
REM deno1.5.1 run --unstable --allow-all %mid% >%goal% || pause
REM deno run --allow-read --allow-write ..\es3\ts\removeCodes.ts %goal%
deno1.5.1 run --unstable --allow-all %mid% >%goalMid% || pause
deno run --allow-read --allow-write ..\es3\ts\removeCodes.ts %goalMid%
del /q %mid%

copy /b ..\es3\js\version_start.js+..\es3\js\babel-polyfill.min.js+%goalMid% %goal%
del /q %goalMid%

REM set pwd=%cd%
REM set src=version
REM set goal=src\js\%src%.js
REM cd ..\..\..\
REM 
REM deno bundle -c deno.json --no-check src\ts\%src%.ts %goal% || pause
REM deno run --allow-read --allow-write tools\deno1.5.1\es3\ts\removeCodes.ts %goal%
REM 
REM cd %pwd%