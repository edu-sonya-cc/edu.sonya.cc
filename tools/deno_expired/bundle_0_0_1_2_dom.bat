@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\dom.ts src\_jsToBeJoined\dom.js || pause