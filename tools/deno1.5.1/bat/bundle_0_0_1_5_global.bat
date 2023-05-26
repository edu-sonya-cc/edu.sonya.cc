@ECHO OFF
set src=global
set mid=..\es3_%src%.ts
set goal=..\es3\_jsToBeJoined\%src%.js
echo const [_diagnostics, actual] = await Deno.bundle('../../../src/ts/%src%.ts', undefined, { target: 'es3' });console.log(actual);>%mid%
deno1.5.1 run --unstable --allow-all %mid% >%goal% || pause
deno run --allow-read --allow-write ..\es3\ts\removeCodes.ts %goal%
del /q %mid%
