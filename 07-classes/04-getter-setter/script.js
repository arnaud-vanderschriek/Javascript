/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{

        class Person{
            constructor(LastName,FirstName){
                this.LastName = "Hebentoi",
                this.FirstName = "Etalorsla";
            }
                get fullName(){
                   return this.LastName+this.FirstName;
                }
            };
        let arnaud = new Person(arnaud.fullName());
        console.log(arnaud);
    });
})();
