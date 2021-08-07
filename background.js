var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab)
{
  toggle = !toggle;
  if(toggle)
  {
    document.getElementById('myAudio').play()
    chrome.browserAction.setIcon({path: "pause_icon_2.ico"});
  }
  else
  {
    document.getElementById('myAudio').pause()
    chrome.browserAction.setIcon({path: "play_icon_2.ico"});
  }
});
