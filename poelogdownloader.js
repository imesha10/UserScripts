// ==UserScript==
// @name        Poe Log Downloder
// @namespace   Violentmonkey Scripts
// @match       https://poe.com/*
// @grant       none
// @version     1.5
// @author      -
// @description Downloads the logs of poe chatlogs.
// @updateURL   https://raw.githubusercontent.com/imesha10/UserScripts/master/poelogdownloader.js
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @grant       GM_addStyle
// @license     MIT
// @icon        https://poe.com/favicon.ico    
// ==/UserScript==
 
// One of ther requires was manually moved here to upload to greasy forks.

function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
) {
    var targetNodes, btargetsFound;
 
    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);
 
    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;
 
            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound     = actionFunction (jThis);
                if (cancelFound)
                    btargetsFound   = false;
                else
                    jThis.data ('alreadyFound', true);
            }
        } );
    }
    else {
        btargetsFound   = false;
    }
 
    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];
 
    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
 
 
waitForKeyElements (".ChatPageMainFooter_footer__Hm4Rt", actionFunction);
 
 
function actionFunction (jNode) {
    // Step 1: Get a reference to the footer element
    const footer = document.querySelector('.ChatPageMainFooter_footer__Hm4Rt');
 
    // Step 2: Create a button element
    const button = document.createElement('button');
 
    // Step 3: Add the required classes to the button
    button.classList.add('Button_buttonBase__0QP_m', 'Button_primary__pIDjn', 'ChatMessageInputView_sendButton__reEpT');
 
    // Step 4: Create a SVG element, set its attributes and add it to the button
    // Create an SVG element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 
    // Set the attributes of the SVG element
    svg.setAttribute("id", "my-svg");
    svg.setAttribute("viewBox", "0 0 64 64");
    svg.setAttribute("version", "1.0");
 
    // Set the innerHTML of the SVG element to the contents of the SVG file
    svg.innerHTML = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:ns1="http://sozi.baierouge.fr" id="svg6218" viewBox="0 0 64 64" version="1.0" inkscape:version="0.91 r13725"> <defs id="defs6220"> <linearGradient id="linearGradient8915"> <stop id="stop8917" style="stop-color:#eeeeec" offset="0"/> <stop id="stop8919" style="stop-color:#eeeeec;stop-opacity:0" offset="1"/> </linearGradient> <radialGradient id="radialGradient8014" gradientUnits="userSpaceOnUse" cy="42.769" cx="32.27" gradientTransform="matrix(1.4242 0 0 1.5022 -13.69 -15.288)" r="29.698"> <stop id="stop3019" style="stop-color:#0aea0a" offset="0"/> <stop id="stop3021" style="stop-color:#47ec4d" offset=".33036"/> <stop id="stop3023" style="stop-color:#2bd834" offset=".5"/> <stop id="stop3025" style="stop-color:#10b426" offset=".875"/> <stop id="stop3027" style="stop-color:#076a11" offset="1"/> </radialGradient> <radialGradient id="radialGradient8923" xlink:href="#linearGradient8915" gradientUnits="userSpaceOnUse" cy="64" cx="36.77" r="27.513"/> <radialGradient id="radialGradient10731" xlink:href="#linearGradient8915" gradientUnits="userSpaceOnUse" cy="72.554" cx="13.894" gradientTransform="matrix(1 0 0 .51198 0 30.26)" r="16.448"/> </defs> <g id="layer2"> <path id="path7119" style="fill:url(#radialGradient8014)" d="m61.968 30.445a29.698 29.698 0 1 1 -59.397 0 29.698 29.698 0 1 1 59.397 0z" transform="matrix(1.0081 0 0 1.0081 -1.192 .76532)"/> </g> <g id="layer3"> <path id="text3011" style="fill:#eeeeec" d="m13.362 36.783l12.626 12.533c1.076 1.646 2.595 2.469 4.557 2.469 2.024 0 3.606-0.823 4.746-2.469l12.533-12.533c1.137-1.139 1.706-2.436 1.706-3.891 0-1.52-0.569-2.849-1.708-3.988-1.138-1.138-2.468-1.707-3.988-1.707-1.392 0-2.689 0.569-3.89 1.709l-3.799 3.891v-13.29c0-1.709-0.553-3.054-1.661-4.035s-2.389-1.472-3.843-1.472c-1.52 0-2.834 0.491-3.942 1.472s-1.661 2.326-1.661 4.035v13.29l-3.796-3.891c-1.139-1.14-2.437-1.709-3.893-1.709-1.518 0-2.847 0.569-3.987 1.707-1.139 1.139-1.709 2.468-1.709 3.988 0 1.455 0.57 2.752 1.709 3.891z"/> </g> <g id="layer4"> <path id="path8028" style="opacity:0.64;fill:url(#radialGradient8923)" d="m64.282 45.23a27.513 27.513 0 1 1 -55.025 0 27.513 27.513 0 1 1 55.025 0z" transform="matrix(1.0081 0 0 1.0081 -5.1699 -11.677)"/> <path id="path9812" style="fill:url(#radialGradient10731)" d="m30.341 53.586a16.842 16.842 0 0 1 -32.895 5.093l16.053-5.093z" transform="matrix(-.91009 1.1621 -1.1621 -.91009 103.47 62.241)"/> <path id="path10709" style="fill:url(#radialGradient10731)" d="m30.341 53.586a16.842 16.842 0 0 1 -32.895 5.093l16.053-5.093z" transform="matrix(-1.4674 -.16002 .16002 -1.4674 41.862 109.2)"/> <path id="path10713" style="opacity:.5;fill:url(#radialGradient10731)" d="m30.341 53.586a16.842 16.842 0 0 1 -32.895 5.093l16.053-5.093z" transform="matrix(1.0437 -1.0437 1.0437 1.0437 -35.856 -8.0299)"/> </g> <metadata> <rdf:RDF> <cc:Work> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/> <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/> <dc:publisher> <cc:Agent rdf:about="http://openclipart.org/"> <dc:title>Openclipart</dc:title> </cc:Agent> </dc:publisher> <dc:title>Crystal Download Icon</dc:title> <dc:date>2006-09-09T23:42:38</dc:date> <dc:description>A glossy, shiny green download icon.</dc:description> <dc:source>https://openclipart.org/detail/114/crystal-download-icon-by-voxxi</dc:source> <dc:creator> <cc:Agent> <dc:title>Voxxi</dc:title> </cc:Agent> </dc:creator> <dc:subject> <rdf:Bag> <rdf:li>arrow</rdf:li> <rdf:li>button</rdf:li> <rdf:li>crystal</rdf:li> <rdf:li>download</rdf:li> <rdf:li>glossy</rdf:li> <rdf:li>green</rdf:li> <rdf:li>how i did it</rdf:li> <rdf:li>icon</rdf:li> <rdf:li>round</rdf:li> <rdf:li>shiny</rdf:li> </rdf:Bag> </dc:subject> </cc:Work> <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/"> <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/> <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/> <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/> </cc:License> </rdf:RDF> </metadata></svg>';
    button.appendChild(svg);
 
    // Step 5: Add an event listener to the button
    button.addEventListener('click', () => {
      // Code to execute when the button is clicked
      console.log('Button clicked!');
      // Get the child elements
      var childElementsPairs = $('.Message_row___ur0Y')
 
 
 
      // Loop through the child elements and build the chat log
      var chatLog = '';
      for (var i = 0; i < childElementsPairs.length; i++) {
        var outputs1 = childElementsPairs.eq(i).children().last().css("background");
        // user
        if (outputs1 === "rgb(59, 58, 190) none repeat scroll 0% 0% / auto padding-box border-box"){
          chatLog += "USER:\n" + childElementsPairs.eq(i).children().text() + "\n\n";
        }
        // ai
        else if (outputs1 == "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"){
          chatLog += "\n\AI:\n" + childElementsPairs.eq(i).children().text() + "\n\n";
        }
      }
 
      // Create a Blob object with the output and set its MIME type to "text/plain"
      const blob = new Blob([chatLog], { type: "text/plain" });
 
      // Create the file save options object
      const options = {
        types: [
          {
            description: "Text file",
            accept: { "text/plain": [".txt"] },
          },
        ],
      };
 
      // Use the stored file name or a default file name if none is stored
      const defaultName = localStorage.getItem("fileName") || "output.txt";
 
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
 
    });
 
    // Step 6: Append the button to the footer
    footer.appendChild(button);
}
