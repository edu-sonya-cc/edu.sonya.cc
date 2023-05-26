@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\data\data.ts src\js\data.js || pause