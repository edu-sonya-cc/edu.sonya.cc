@ECHO OFF
cd ..\..\

#deno bundle -c deno.json --no-check src\ts\actualPage\story.ts src\js\story.js 2>%log% && start "" notepad %log%
deno bundle -c deno.json --no-check src\ts\actualPage\story.ts src\js\story.js || pause