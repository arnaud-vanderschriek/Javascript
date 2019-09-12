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
    let conf;
    while(conf=0){
    let age=prompt("Quel age avez vous? :");
    let sex=prompt("Etes vous une femme ou un homme?: ");
    let city=prompt("Ou habitez vous?: ");
    let conf=confirm("Donc vous avez " +age+ " ans, vous etes une/un " +sex+ "et vous habitez à " +city+ " Est ce correct?: ");
    }

    })();
