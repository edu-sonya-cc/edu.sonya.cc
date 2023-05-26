@ECHO OFF
set src=main
set mid=..\es3_%src%.ts
set goal=..\es3\_jsToBeJoined\%src%.js
echo const [_diagnostics, actual] = await Deno.bundle('../../../src/ts/%src%.ts', undefined, { target: 'es3' });console.log(actual);>%mid%
deno1.5.1 run --unstable --allow-all %mid% >%goal% || pause
deno run --allow-read --allow-write ..\es3\ts\removeCodes.ts %goal%
del /q %mid%

cd ..\es3\_jsToBeJoined\
REM copy /b ..\js\1.js+..\js\2.js+const.js+dom.js+storage.js+utils.js+global.js+pcGlobal.js+actualPageBase.js+DPIHelper.js+svgHelper.js+dice.js+box.js+brickBase.js+brickWithTableBase.js+pokerBase.js+copybookBase.js+boxBase.js+diceBase.js+main.js ..\..\..\..\src\js\main.js
copy /b ..\js\tslib.js+const.js+dom.js+storage.js+utils.js+global.js+pcGlobal.js+actualPageBase.js+DPIHelper.js+svgHelper.js+dice.js+box.js+brickBase.js+brickWithTableBase.js+pokerBase.js+copybookBase.js+boxBase.js+diceBase.js+main.js ..\..\..\..\src\js\main.js