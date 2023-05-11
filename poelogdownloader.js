// ==UserScript==
// @name        Poe Log Downloder
// @namespace   Violentmonkey Scripts
// @match       https://poe.com/*
// @grant       none
// @version     1.9
// @author      -
// @description Downloads the logs of poe chatlogs.
// @updateURL   https://raw.githubusercontent.com/imesha10/UserScripts/master/poelogdownloader.js
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @iconURL        https://poe.com/favicon.ico
// @license     MIT
// ==/UserScript==

function addButton() {
  var inputWrapper = document.querySelector('.ChatMessageInputView_inputWrapper__kKP4W');
  var clearButtonWrapper = document.querySelector('.ChatMessageInputView_paintbrushWraper__DHMNW');

  if (!inputWrapper || !clearButtonWrapper) return;

  var existingButton = inputWrapper.querySelector('.downloadButton');
  if (existingButton) return;

  var downloadButton = document.createElement('button');
  downloadButton.innerHTML = '⬇️';
  downloadButton.className = 'Button_buttonBase__0QP_m Button_primary__pIDjn ChatMessageInputView_sendButton__reEpT downloadButton';
  downloadButton.onclick = function () {
    console.log('Button clicked!');
    // Get the child elements
    var childElementsPairs = $('.Message_row___ur0Y')



    // Loop through the child elements and build the chat log
    var chatLog = '';
    for (var i = 0; i < childElementsPairs.length; i++) {
      var outputs1 = childElementsPairs.eq(i).children().last().css("background");
      // user
      if (outputs1 === "rgb(59, 58, 190) none repeat scroll 0% 0% / auto padding-box border-box") {
        chatLog += "# USER:\n" + childElementsPairs.eq(i).children().text() + "\n\n";
      }
      // ai
      else if (outputs1 == "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
        chatLog += "\n\# AI:\n" + childElementsPairs.eq(i).children().text() + "\n\n";
      }
    }

     // Create a Blob object with the output and set its MIME type to "text/plain"
      const blob = new Blob([chatLog], { type: "text/markdown" });

      // Create the file save options object
      const options = {
       types: [
         {
           description: "Markdown file",
           accept: { "text/markdown": [".md"] },
         },
       ],
      };

      // Use the stored file name or a default file name if none is stored
      const defaultName = localStorage.getItem("fileName") || "output.md";

      // Use showSaveFilePicker to prompt the user for the file location and name
      options.suggestedName = defaultName;
      window.showSaveFilePicker(options).then(function (fileHandle) {
        // Store the file name for future use
        localStorage.setItem("fileName", fileHandle.name);

        // Create a writable stream and write the Blob to the file
        fileHandle.createWritable().then(function (stream) {
          stream.write(blob);
          stream.close();
        });
      });

  }
  inputWrapper.insertBefore(downloadButton, clearButtonWrapper);
}



var targetNode = document.body;
var observerOptions = {
  childList: true,
  attributes: false,
  subtree: true
}

var observer = new MutationObserver(addButton);
observer.observe(targetNode, observerOptions);
