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

    const handleInput = (e) => {
        console.log(e.target.value)

    }

    inputAge.addEventListener("change", handleInput)    
    inputCity.addEventListener("change", (e) => handleInput(e))    


})();
