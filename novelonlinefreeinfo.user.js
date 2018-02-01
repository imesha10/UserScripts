// ==UserScript==
// @name         NOvelonlinefrEeinFoSimpLifierfiXer
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  try to take over the world!
// @author       IMAK
// @match        http://novelonlinefree.info/*
// @updateURL    https://github.com/imesha10/TamperMonkeyScripts/blob/master/novelonlinefreeinfo.user.js
// @grant        none
// ==/UserScript==

var flag_00 = true; // Makes the lines have only one space from each other.
var flag_01 = false; // shows the node types on screen
var flag_02 = false; // shows the node value
$(document).ready(function(){
    'use strict';
    // Your code here...
    var col = "rgb(0,0,0)";
    document.getElementsByClassName("top_header")[0].remove();
    document.getElementsByClassName("lem_bem")[0].remove();
    document.getElementsByClassName("lem_bem_top")[0].remove();
    document.getElementsByClassName("wrap-menu")[0].remove();
    document.getElementsByClassName("custom_content")[0].remove();
    document.getElementsByClassName("cmt_doc")[0].remove();
    document.getElementsByClassName("menu_doc")[0].style.backgroundColor = col;
    document.getElementsByClassName("name_chapter entry-title")[0].style.backgroundColor = col;
    document.getElementsByClassName("menu_doc")[1].style.backgroundColor = col;
    var x = document.getElementsByClassName("breadcrumbs");
    x = [].slice.call(x);
    [].forEach.call(x, function(a){
        a.remove();
    });

    function check1(){
        var childNodes0 = $('#vung_doc')[0].childNodes;
        var previousNodeType = 0;
        var counter = 0;
        for (var i = 0; i < childNodes0.length; i++){
            var nodeType = childNodes0[i].nodeType;
            if (previousNodeType == 1 && nodeType == 1){
               counter++;
            }
            previousNodeType = nodeType;
        }
        console.log(counter);
        return ((counter>3)?true:false);
    }

    if (flag_00 && check1()){
        var childNodes0 = $('#vung_doc')[0].childNodes;
        for (var i = 0; i < childNodes0.length; i++){
            var node = childNodes0[i];
            if (node.nodeType != 3 && i%2==1){node.remove(); i-=1;}
        }
    }

    if (flag_01){
        var childNodes0 = $('#vung_doc')[0].childNodes;
        for (var i = 0; i < childNodes0.length; i++){
            console.log(childNodes0[i].nodeType);
        }
    }

    if (flag_02){
        var childNodes0 = $('#vung_doc')[0].childNodes;
        for (var i = 0; i < childNodes0.length; i++){
            console.log(childNodes0[i].nodeValue);
        }
    }
});
