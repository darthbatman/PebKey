'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "chrome.exe"
WshShell.AppActivate "chrome"
Wscript.Sleep 1600
