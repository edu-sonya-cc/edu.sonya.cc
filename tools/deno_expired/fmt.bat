@ECHO OFF
cd ..\..\

set timestamp=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set timestamp=%timestamp: =0%
set log=log\fmt\fmt_%timestamp%.txt

deno fmt 2>%log%

start "" notepad %log%