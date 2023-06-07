"use strict";

// function update(array) {
//     array.forEach(element => {
//         document.querySelector(element).removeAttribute('disabled')
//         return element
//     });
// }

function update(element) {
    const campo = document.querySelectorAll(element)
    campo.forEach(element => {
        element.removeAttribute('disabled')
        element.classList.add("input__click")
    })

    return campo
}