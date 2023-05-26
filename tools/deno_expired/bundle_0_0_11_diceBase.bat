@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\diceBase.ts src\_jsToBeJoined\diceBase.js || pause
