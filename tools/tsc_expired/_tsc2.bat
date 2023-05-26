@ECHO OFF
md ..\..\src\js\brick

cd jsTsc
md types _toBeJoined
move /y *.d.ts types\
move /y actualPage\*.d.ts types\
move /y bricks\*.d.ts types\
move /y data\*.d.ts types\

cd bricks\
dir /a/b/o/n *.js
move box.js ..\_toBeJoined\
move boxBase.js ..\_toBeJoined\
move brickBase.js ..\_toBeJoined\
move brickWithTableBase.js ..\_toBeJoined\
move copybookBase.js ..\_toBeJoined\
move dice.js ..\_toBeJoined\
move diceBase.js ..\_toBeJoined\
move diceTest.js ..\_toBeJoined\
move pokerBase.js ..\_toBeJoined\

cd ..\actualPage
move actualPageBase.js ..\_toBeJoined\
move IBrickCore.js ..\_toBeJoined\
copy /y *.js ..\..\..\..\src\js\

cd ..
move *.js _toBeJoined\
cd _toBeJoined\
copy /b ..\..\__extends.js+const.js+dom.js+storage.js+utils.js+global.js+pcGlobal.js+actualPageBase.js+DPIHelper.js+svgHelper.js+dice.js+box.js+brickBase.js+brickWithTableBase.js+pokerBase.js+copybookBase.js+boxBase.js+diceBase.js+main.js ..\..\..\..\src\js\main.js

cd ..
copy /y data\data.js ..\..\..\src\js\
copy /y bricks\*.js ..\..\..\src\js\brick\

pause