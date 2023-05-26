@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\boxBase.ts src\_jsToBeJoined\boxBase.js || pause
