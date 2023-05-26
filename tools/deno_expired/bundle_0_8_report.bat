@ECHO OFF
cd ..\..\
deno bundle -c deno.json --no-check src\ts\actualPage\report.ts src\js\report.js || pause