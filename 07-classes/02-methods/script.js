/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
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
            constructor(firstname,lastname){
            this.Firstname = firstname;
            this.Lastname = lastname;
            }
            hello(){
                return `hello, ${this.Firstname} ${this.Lastname}!`;
            }

        }
        let arnaud = new Person("Arnaud", "Vds");

    console.log(arnaud.hello());

    });
})();
