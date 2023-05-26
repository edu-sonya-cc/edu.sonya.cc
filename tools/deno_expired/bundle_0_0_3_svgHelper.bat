@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\svgHelper.ts src\_jsToBeJoined\svgHelper.js || pause
