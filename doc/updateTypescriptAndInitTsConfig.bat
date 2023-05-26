@ECHO OFF
SET LOG=updateTypescriptAndInitTsConfig.log
tsc -v >%LOG%
npm install -g  typescript >>%LOG%
tsc -v >>%LOG%

tsc --init >>%LOG%