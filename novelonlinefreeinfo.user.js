// ==UserScript==
// @name         NOvelonlinefrEeinFoSimpLifierfiXer
// @namespace    tools
// @version      0.977
// @description  try to take over the world!
// @author       IMAK
// @match        http://novelonlinefree.info/*
// @updateURL    https://github.com/imesha10/TamperMonkeyScripts/blob/master/novelonlinefreeinfo.user.js
// @grant        none
// ==/UserScript==

var flag_00 = true; // Makes the lines have only one space from each other.
var flag_01 = false; // debug: shows the node types on screen
var flag_02 = false; // debug: shows the node value
$(document).ready(function(){

    'use strict';

    // Main css removal and modifier
    var col = "rgb(0,0,0)"; 
    $('#header').remove();
    $(".top_header").remove();
    $(".lem_bem").remove();
    $(".lem_bem_top").remove();
    $(".wrap-menu").remove();
    $(".custom_content").remove();
    $(".cmt_doc").remove();
    $(".menu_doc").css('backgroundColor',col);
    $(".name_chapter.entry-title").css('backgroundColor',col);
    $(".breadcrumbs").remove();
    $('.new_update_trangdoc').remove();
    $('.lam_nham_chapter').remove();
    $('.new_update_trangdoc').remove();
    $('#footer').remove();


    // Line fixer stuff
    var childNodes0 = $('#vung_doc')[0].childNodes;
    function check1(){
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
        for (var i = 0; i < childNodes0.length; i++){
            var node = childNodes0[i];
            if (node.nodeName == "P" && i%2==1 && i!=1){node.remove(); i-=1;}
            if (none.nodeName == "SPAN") {
                node.style.fontSize = 19;
                node.style.color = '#cacbcd';
            }
        }
    }

    if (flag_01){
        for (var i = 0; i < childNodes0.length; i++){
            console.log(childNodes0[i].nodeType);
        }
    }

    if (flag_02){
        for (var i = 0; i < childNodes0.length; i++){
            console.log(childNodes0[i].nodeValue);
        }
    }
});
