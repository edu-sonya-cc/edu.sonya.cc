@ECHO OFF
cd ..\..\

#deno bundle -c deno.json --no-check src\ts\actualPage\home.ts src\js\home.js 2>%log% && start "" notepad %log%
deno bundle -c deno.json --no-check src\ts\actualPage\home.ts src\js\home.js || pause