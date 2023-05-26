@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\brickBase.ts src\_jsToBeJoined\brickBase.js || pause
