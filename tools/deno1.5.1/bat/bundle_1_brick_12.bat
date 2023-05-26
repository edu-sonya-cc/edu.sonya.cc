@ECHO OFF
set brickId=12
set mid=..\es3_brick_%brickId%.ts
set goal=..\..\..\src\js\brick\%brickId%.js
echo const [_diagnostics, actual] = await Deno.bundle('../../../src/ts/bricks/%brickId%.ts', undefined, { target: 'es3' });console.log(actual);>%mid%
deno1.5.1 run --unstable --allow-all %mid% >%goal% || pause
deno run --allow-read --allow-write ..\es3\ts\removeCodes.ts %goal%
del /q %mid%