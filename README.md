# AudioStreamPlayer
An extension for Google Chrome which plays audio stream from URLs. The idea is to leverage HTML audio element and play/pause it using the associated controls. 

A typical Chrome extension has couple of core components : 
1. A manifest.json file which has the required specifications of the extension. 
2. A popup.html file (which renders when the icon is clicked, not relevant in this case.)
3. Multiple JavaScript files which are used to perform desired actions when required. 

manifest.json has two important parameters in the current use case. 

<h2>background</h2>
The background needs to be persistent so that the audio element is constantly in scope. However, this leads to the fact that once paused the stream might fall out of sync and once played again, it might start playing from the previous session. This is a drawback which needs to be addressed.

Therefore, the property 'persistent' is turned on so that the background.html file keeps existing. If not, the file would've been destroyed when moved out of scope.

<code>
 "background":
  {
    "persistent": true,
    "page": "background.html"
  }
</code>

<h2>icons</h2>
A Chrome extension supports only one icon file. But, I needed at least two icon files to denote play and pause. However, it allows different files for different icon resolutions. Therefore, I added two files for two different resolution and used them for play and pause. This is a quick hack but it works as of now. 

<code>
  "icons":
  {
   "128": "pause_icon_2.ico",
   "32": "play_icon_2.ico"
  },
 </code>
 
 Rest of the aplication is pretty straight-forward. A background.html has a stream URL declaed as an audio element. The associated JavaScript uses a <code>document.getElementByID</code> to play and pause it. The script file is sourced in background.html. 
 
 Overall, three files, 1. manifest.json 2. background.html 3. background.js creates the whole application. Additional helper files are play_icon_2.ico and pause_icon_2.ico.
