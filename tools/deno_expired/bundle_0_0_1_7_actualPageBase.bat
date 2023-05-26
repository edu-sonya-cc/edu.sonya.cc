@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\actualPage\actualPageBase.ts src\_jsToBeJoined\actualPageBase.js || pause
