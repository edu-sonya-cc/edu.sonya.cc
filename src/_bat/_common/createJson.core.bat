@ECHO OFF
chcp 65001
:: %1: server, local, %2: min, %3: fileName, %4: subFolderName

set langSet=en zh_cn zh_tw
set landscapeSet=false true

set htmFilename=%3%

:: echo %4%
set subFolderName=
if "%4%" neq "" (
  echo %%4%% is defined.
  set subFolderName=%4%
)
set subFolderName=%subFolderName:\=\\%
:: echo subFolderName: %subFolderName%
:: pause & exit

if "%2%" == "min" (
  set minSeg=.min
) else (
  set minSeg=
)

set htmlPath=%cd%
call set htmlPath=%%htmlPath:_bat\box\%htmFilename%=%%
:: echo %htmlPath%

if "%1%" == "server" (
  set url=https://anqisoft.github.io/
  set goal=%CD%\server%minSeg%.json
) else (
  set url=file:///%htmlPath:\=/%
  set goal=%CD%\local%minSeg%.json
)
set url=%url%box/%htmFilename%%minSeg%.htm

:: https://www.codenong.com/37071353/
if "%subFolderName%" neq "" (
  set pdfPath=%htmlPath:\=\\%box\\%htmFilename%\\%subFolderName%\\pdfs\\
) else (
  set pdfPath=%htmlPath:\=\\%box\\%htmFilename%\\pdfs\\
)
set pdfPath=%pdfPath:\\\\=\\%
:: echo %pdfPath% && pause
:: echo %url%

echo [>%goal%

title "Create json config file for local"

setlocal enabledelayedexpansion
for %%l in (!langSet!) do (
  set lang=%%l
  rem echo !lang!

  for /L %%n in (1, 1, 2) do (
    set no=%%n
    rem echo !no!

    for %%d in (!landscapeSet!) do (
      set landscape=%%d
      rem echo !lang! !no! !landscape!

      if "!landscape!" == "true" (
        set pdfFile=landscape_!no!
      ) else (
        set pdfFile=portrait
      )
      rem echo !pdfFile!

      set ok=0
      if "!landscape!" == "true" (
        set ok=1
      ) else (
        if "!no!" == "1" (
          set ok=1
        )
      )

      if "!ok!" == "1" (
        set endChar=,
        if "!lang!:!no!:!landscape!" == "zh_tw:2:true" (
          set endChar=
        )
        echo   { "url": "!url!?lang=!lang!&landscape=!landscape!&no=!no!", "pdf": "!pdfPath!!lang!\\!pdfFile!.pdf", "params": { } }!endChar!>>%goal%
      )
    )
  )
)

echo ]>>%goal%
:: PAUSE & exit