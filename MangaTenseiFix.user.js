// ==UserScript==
// @name         MangaTenseiFix
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/imesha10/TamperMonkeyScripts/blob/master/MangaTenseiFix.user.js
// @match        https://mangatensei.com/chapter/*
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    $(".container.chapter-nav.top")[0].childNodes[3].remove();
    $(".container.chapter-nav.top")[0].childNodes[2].remove();
    $(".container.chapter-nav.top")[0].childNodes[0].remove();
    $(".st-sticky-share-buttons")[0].remove();
    $(".topnav")[0].remove();
    $(".navbar.navbar-expand.navbar-dark")[0].remove();
    $(".sharethis-inline-follow-buttons.st-inline-follow-buttons")[0].remove();
    $(".container.chapter-page")[0].childNodes[3].remove();
});

