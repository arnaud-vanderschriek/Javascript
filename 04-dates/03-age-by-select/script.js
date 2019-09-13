/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        
        let jour = document.getElementById("dob-day").value;
        let mois = document.getElementById("dob-month").value;
        let annee = document.getElementById("dob-year").value;
        let userMonth;
        let userDay;
        let pDate = new Date();
        
        /* calcul de l'annee */
        let userYear =  pDate.getFullYear() - annee;
        /* calcul du mois */
        if (pDate.getMonth()>mois){
            userMonth = pDate.getMonth() - mois;
        }
        else {
            userMonth = mois - pDate.getMonth();
        }
        /* calcul du jour */

        if (pDate.getDay() > jour ){
            userDay = pDate.getDay() - jour;
        }
        else{
            userDay = jour - pDate.getDay();
        }

        console.log("Vous avez "+userYear+" ans, "+userMonth+" mois et "+userDay+" jours");



    });
})();
