/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let inputAge = document.querySelector('#inputAge1-4')
    let inputCity = document.querySelector('#inputCity1-4')
    let checkBox = document.querySelectorAll('.checkBox1-4')
    let buttonOpenPopup = document.querySelector('#button1-4')
    let popUp = document.querySelector('.popUp1-4')
    let buttonExitPopup = document.querySelector(".buttonExitPopUP1-4")
    let age = document.querySelector("#popUpLi1-4Age")
    let city = document.querySelector("#popUpLi1-4City")
    let gender = document.querySelector("#popUpLi1-4Gender")


    inputAge.addEventListener("change", (e) => {
        age.innerHTML = e.target.value;

    })   

    inputCity.addEventListener("change", (e) => {
        city.innerHTML = e.target.value;
    })    

    for(let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('click', (e) => {
            gender.innerHTML = e.target.value
        })}
    

    buttonOpenPopup.addEventListener('click', () => {
        popUp.className = 'popUp1-42'

    })

    buttonExitPopup.addEventListener('click', () => {
        popUp.className = 'popUp1-4'
    })
})();
