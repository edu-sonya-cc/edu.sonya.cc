@ECHO OFF
cd ..\..\

deno bundle -c deno.json --no-check src\ts\pcGlobal.ts src\_jsToBeJoined\pcGlobal.js || pause