// ==UserScript==
// @name         NOvelonlinefrEeinFoSimpLifierfiXer
// @namespace    tools
// @version      1.001
// @description  try to take over the world!
// @author       IMAK
// @match        http://novelonlinefree.info/chapter/* 
// @match        http://lightnovelgate.com/chapter/*
// @match        https://novelonlinefree.info/chapter/*
// @match        https://novelonlinefull.com/chapter/*
// @updateURL    https://github.com/imesha10/TamperMonkeyScripts/blob/master/novelonlinefreeinfo.user.js
// @grant        none
// ==/UserScript==


 // Later i realized I should taken all the nodes and measured their length then deleted all the ones with 0
 // After I should have just added one blank p 
 // But it seems that they fixed that so ya............
 // All the flags are set false which makes non of the line modifier run
 // I really want to change this code to make it better but I can't find a test subject for this and
 // there is a significan bug where some actual lines with words gets deleted (lol)

var flag_00 = false; // Makes the lines have only one space from each other.
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
    $('#vung_doc').css('color',"#cacbcd");
    $('#vung_doc').css('backgroundColor',"#262626");    



   
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
        }
    }

    if (flag_00){
        for (var i = 0; i < childNodes0.length; i++){
            var node = childNodes0[i];
            if (node.nodeType == 1 && node.nodeName == "SPAN") {
                node.setAttribute("style", "font-size:19; color: #ff00e9");
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
