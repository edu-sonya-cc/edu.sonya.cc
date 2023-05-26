@ECHO OFF
cd ..\..\

set brickId=10
deno bundle -c deno.json --no-check src\ts\bricks\%brickId%.ts src\js\brick\%brickId%.js || pause