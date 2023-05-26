@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\actualPage\treasures.ts src\js\treasures.js || pause