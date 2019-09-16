/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
  
   document.getElementById("run").addEventListener("click", ()=>{

    let pAnnee=[];
    
    let options= { month:"long", day:"numeric"};
    let annee = document.getElementById("year").value;
        
        for (i=0;i <=11;i++){
            
            pAnnee = new Date(annee, i,13);
            console.log(pAnnee);

           if(pAnnee.getDay()==5){
            alert("C'est le mois de: "+pAnnee.toLocaleDateString("fr-FR", options));              
           }
}
     
  
    
    
    });



})();
