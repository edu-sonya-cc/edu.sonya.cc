@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\storage.ts src\_jsToBeJoined\storage.js || pause