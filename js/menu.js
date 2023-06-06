"use strict";

function changeState(element, pai) {
    let button = document.querySelector(pai).style;
    let display = document.querySelector(element).style.display;

    if (display == "block") {
        document.querySelector(element).style.display = "none";


    } else {
        document.querySelector(element).style.display = "block";
        button.classList.add('testee')
    }
}