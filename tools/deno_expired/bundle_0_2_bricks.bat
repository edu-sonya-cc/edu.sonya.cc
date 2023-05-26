@ECHO OFF
cd ..\..\

#deno bundle -c deno.json --no-check src\ts\actualPage\bricks.ts src\js\bricks.js 2>%log% && start "" notepad %log%
deno bundle -c deno.json --no-check src\ts\actualPage\bricks.ts src\js\bricks.js || pause