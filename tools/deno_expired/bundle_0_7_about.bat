@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check -r src\ts\actualPage\about.ts src\js\about.js || pause