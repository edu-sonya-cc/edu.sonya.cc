@ECHO OFF
cd ..\..\

#deno bundle -c deno.json --no-check src\ts\actualPage\stories.ts src\js\stories.js 2>%log% && start "" notepad %log%
deno bundle -c deno.json --no-check src\ts\actualPage\stories.ts src\js\stories.js || pause