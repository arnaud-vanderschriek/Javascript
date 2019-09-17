/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
    let arr=[];
    document.querySelectorAll("td[id^=n-]").forEach(nbrAlea);
   function nbrAlea(elem){
    let nbr=Math.floor(Math.random()*100);
    elem.innerText=nbr;
    arr.push(nbr);
   }
   console.log(arr);

   let nbrMax = arr.reduce(function(a,b){
       return Math.max(a,b);

   });
   console.log(nbrMax);

   let nbrMin = arr.reduce(function(a,b){
       return Math.min(a,b);

   });
   console.log(nbrMin);
   document.getElementById("min").innerHTML=nbrMin;
   document.getElementById("max").innerHTML=nbrMax;
   let somme=0;
   for(i=0;i<arr.length;i++){
    somme=somme+arr[i];
    }
   console.log(somme);
   document.getElementById("sum").innerHTML=somme;
   let moy=somme/10;
   console.log(moy);
   document.getElementById("average").innerHTML=moy;
   
    });
})();
