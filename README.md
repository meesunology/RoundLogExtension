# Round Log Extension
by Meesun Park

## Description
Reminds consultants to input a roundlog every 15 minutes.

## Current progress:
* Badgetext of estimated Rounds that should be completed

## Current Features:
* Click to open a pop-up that is an embeded Google Form of Round Log
* New tab goes to the Busch Staff Page
* Notification every 15 minutes to remind consultants to do a round log

## To try:
Download and import to as "Load unpacked extension" in Chrome:\\extensions. Developer Mode must be enabled.
To install through a batch file, use the following commands:
* chrome.exe --system-developer-mode //enables developer mode
* START chrome.exe --load-extension = "*insert path file*" //loads the extension

## Implementation:
@echo off
color 0a
mode con cols=75 lines=45 >nul
title BCC Shift Tools: Now With Random Round Logs!

:start
powercfg -change -standby-timeout-ac 15
cls
echo.
type "\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File\announce\LOGO"
echo.
echo.
echo Announcements
echo -------------
type "\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File\announce\ANNOUNCEMENTS.txt"
echo.
echo.
echo Mildly Entertaining Round Log/Comment:
echo --------------------------------------
call "\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File\RandomFavoriteRoundLog"
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --make-default-browser
echo.
echo.

:menu
echo Questions? Suggestions? Email arc_lab@email.rutgers.edu!
echo.
echo MENU
echo ====
echo 1. Start ZED 
echo 2. Start Consultant Tools (ZED, Pidgin, Lab websites, Pharos) and exit 
echo 3. Start Dispatch Tools (Consultant Tools + HDRT) and exit 
REM Updating open shifts tools, but am considering removing them entirely.
REM echo 4. Display open shifts
REM echo 5. Update open shifts list
echo 4. Exit

:choice
set /p n=Choose an option: 
if %n%==1 (goto ZED)
if %n%==2 (goto CCONS)
if %n%==3 (goto CDISP)
REM if %n%==4 (goto OSHIFTS)
REM if %n%==5 (goto USHIFTS)
if %n%==4 (exit)
if %n%==7 (goto WANNAORDERFOOD)
if %n%==12 (START /d "\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File" flux-setup.exe)
if %n%==13 (goto SPOOKY)
if %n%==14 (goto ALBERT)
if %n%==15 (goto DOGGO)
if %n%==666 (goto RIP)
if %n%==harambe (goto HARAMBE)
if %n%==xp (goto XP)
echo Invalid choice.
goto choice

:ZED
echo.
taskkill /F /IM chrome.exe /T
START chrome.exe https://zed.rutgers.edu/
goto start


:CCONS
echo.
taskkill /F /IM chrome.exe /T
chrome.exe --system-developer-mode
START chrome.exe --load-extension="\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File\RoundLogExtension-master
START chrome.exe https://zed.rutgers.edu/ http://connect.rutgers.edu "https://www.nbcs.rutgers.edu/webtools/mrbs/ccf/month.php?year=&month=&area=5" https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/ https://supportcenter.oit-nbcs.rutgers.edu/content/busch-consultants-staff-page https://printer_busch_guest:abc123@nagios.rutgers.edu/cgi-bin/status.cgi?hostgroup=all&style=detail https://supportcenter.oit-nbcs.rutgers.edu/busch-printing-forms
START pidgin.exe
START chrome.exe https://ru-oit-busch.slack.com
cd "C:\Program files (x86)\Pharos\bin"
"C:\Program Files (x86)\Pharos\Bin\AdminLauncher.exe" C:\Windows\system32\mmc.exe -32 RemoteConsole.msc
goto end


:CDISP
echo.
taskkill /F /IM chrome.exe /T
chrome.exe --system-developer-mode
START chrome.exe --load-extension="\\sc-server.rutgers.edu\SignIns\Busch\Consultant Batch File\RoundLogExtension-master
START chrome.exe http://hdrt.rutgers.edu https://zed.rutgers.edu/ http://mail.scarletmail.rutgers.edu/ "https://www.nbcs.rutgers.edu/webtools/mrbs/ccf/month.php?year=&month=&area=5" https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/ https://supportcenter.oit-nbcs.rutgers.edu/content/busch-consultants-staff-page https://printer_busch_guest:abc123@nagios.rutgers.edu/cgi-bin/status.cgi?hostgroup=all&style=detail https://supportcenter.oit-nbcs.rutgers.edu/busch-printing-forms 
START pidgin.exe
START chrome.exe https://ru-oit-busch.slack.com
START chrome.exe https://connect.rutgers.edu
cd "C:\Program files (x86)\Pharos\bin"
"C:\Program Files (x86)\Pharos\Bin\AdminLauncher.exe" C:\Windows\system32\mmc.exe -32 RemoteConsole.msc
goto end

We had an issue where the Round Log Extension would not be added into the chrome if there were already chrome.exe processes. To resolve this, Chrome extensions are killed before starting. However, if any important URLs were open, they can be restored once started.
