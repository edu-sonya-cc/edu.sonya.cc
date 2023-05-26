@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\main.ts src\_jsToBeJoined\main.js || pause
cd src\_jsToBeJoined\
copy /b const.js+dom.js+storage.js+utils.js+global.js+pcGlobal.js+actualPageBase.js+DPIHelper.js+svgHelper.js+dice.js+box.js+brickBase.js+brickWithTableBase.js+pokerBase.js+copybookBase.js+boxBase.js+diceBase.js+main.js ..\js\main.js