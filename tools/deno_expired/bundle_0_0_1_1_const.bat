@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\const.ts src\_jsToBeJoined\const.js || pause