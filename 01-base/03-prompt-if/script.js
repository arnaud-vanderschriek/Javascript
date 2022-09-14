/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let input = document.querySelectorAll(".checkBox")
    let response = document.querySelector("#response")

    const inputChecked = (e) => {
        if(e.target.value == 'yes') {
            response.innerHTML = "Le gateau c'est trop bon !"
        }
        else {
            response.innerHTML = "Je comprends pas le gateau c'est trop bon !"
        }
    }
    
    for(let i = 0; i < input.length ; i++) {
        input[i].addEventListener('click',(e) => inputChecked(e))
    }
})(); 
