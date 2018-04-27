'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "chrome.exe"
WshShell.AppActivate "chrome"
Wscript.Sleep 1600

WshShell.SendKeys "http://www.badgeronline.co.uk/wp-content/uploads/241-likes-1764x700.jpg"
WshShell.SendKeys "{ENTER}"
