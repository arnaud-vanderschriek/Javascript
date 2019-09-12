/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let maDate=new Date();
    let h = maDate.getHours();
    console.log(h);
    let m = maDate.getMinutes();
    console.log(m);
    let s = maDate.getSeconds();
    console.log(s);
    console.log(h+":"+m+":"+s);
    if(h<17 && m<30){
        document.getElementById("target").innerHTML="Bonjour";
    }
    else{
        document.getElementById("target").innerHTML="Bonsoir";
    }
})();
