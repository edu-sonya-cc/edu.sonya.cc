@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\DPIHelper.ts src\_jsToBeJoined\DPIHelper.js || pause