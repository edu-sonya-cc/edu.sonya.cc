@ECHO OFF
cd ..\..\

# deno bundle -c deno.json --no-check src\ts\actualPage\brick.ts src\js\brick.js 2>%log% && start "" notepad %log%
deno bundle -c deno.json --no-check src\ts\actualPage\brick.ts src\js\brick.js || pause
