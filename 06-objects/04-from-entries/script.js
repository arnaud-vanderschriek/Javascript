/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    
    document.getElementById("run").addEventListener("click", ()=>{
       
      const mixTabObj= new Map([["name","Skitty"],["species","cat"],["age",9],["gender","female"],["color","tabby"]]);

       let newObj = Object.fromEntries(mixTabObj);
       console.log(newObj);
       
       // faire un for loop qui prends a chaque fois l'index 0 du premier tableau et l'index 0 du deuxième tableau...
       /* let result=[];
        let obj=0;
        for(i=0;i<keys.length;i++){
            result= new Map([[keys[i],values[i]]]);
        }
        obj = Object.fromEntries(result);   
        console.log(obj);*/
        })
})();
