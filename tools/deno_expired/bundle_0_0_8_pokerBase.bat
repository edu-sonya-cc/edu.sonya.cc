@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\pokerBase.ts src\_jsToBeJoined\pokerBase.js || pause
