"use strict";
// make an array of magicians
let magicians = ['Harry Potter', 'shof shof saain', 'raju chacha'];
function great_magician(magicians) {
    magicians.forEach(magician => {
        console.log(`The Great Magician is ${magician} .`);
    });
}
great_magician(magicians);
