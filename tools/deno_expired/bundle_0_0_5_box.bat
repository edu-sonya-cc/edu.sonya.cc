@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\box.ts src\_jsToBeJoined\box.js || pause
