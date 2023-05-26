@ECHO OFF
cd ..\..\
deno bundle -c deno.json --no-check src\ts\global.ts src\_jsToBeJoined\global.js || pause