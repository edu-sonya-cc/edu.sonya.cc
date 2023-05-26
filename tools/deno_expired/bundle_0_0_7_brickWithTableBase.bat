@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\brickWithTableBase.ts src\_jsToBeJoined\brickWithTableBase.js || pause
