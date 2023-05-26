@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\dice.ts src\_jsToBeJoined\dice.js || pause
