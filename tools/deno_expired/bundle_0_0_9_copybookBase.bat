@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\bricks\copybookBase.ts src\_jsToBeJoined\copybookBase.js || pause
