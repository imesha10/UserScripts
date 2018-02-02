// ==UserScript==
// @name         NOvelonlinefrEeinFoSimpLifierfiXer
// @namespace    tools
// @version      0.965
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
    var col = "rgb(0,0,0)"; 
    $(".top_header").remove();
    $(".lem_bem").remove();
    $(".lem_bem_top").remove();
    $(".wrap-menu").remove();
    $(".custom_content").remove();
    $(".cmt_doc").remove();
    $(".menu_doc").css('backgroundColor',col);
    [].forEach(childNodes, function(){
        this.css('backgroundColor',col);
    });
    $(".breadcrumbs").remove();

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

    function check2(x){
        if (childNodes0.length<x+2 && childNodes0[x].nodeType == childNodes0[x+1].nodeType) return false;
        else return true;
    }

    if (flag_00 && check1()){
        for (var i = 0; i < childNodes0.length; i++){
            var node = childNodes0[i];
            if (node.nodeType != 3 && i%2==1 && check2(i)){node.remove(); i-=1;}
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
