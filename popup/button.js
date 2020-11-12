
/*
Lifted almost entirely from Mozilla's Extension Examples. In particular:
https://github.com/mdn/webextensions-examples/blob/master/open-my-page-button/background.js
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "https://www.musicca.com/metronome"
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);
