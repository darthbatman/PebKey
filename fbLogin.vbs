'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.SendKeys "facebook.com"
WshShell.SendKeys "{ENTER}"
Wscript.Sleep 10000
WshShell.SendKeys "darthanakin44@gmail.com"
WshShell.SendKeys "{TAB}"
WshShell.SendKeys "batpoopdonuts"
WshShell.SendKeys "{ENTER}"