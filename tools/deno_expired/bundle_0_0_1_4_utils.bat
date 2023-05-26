@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\utils.ts src\_jsToBeJoined\utils.js || pause