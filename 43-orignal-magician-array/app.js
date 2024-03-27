"use strict";
// make an array of magicians
console.log('\n  The Orignal Magicians Array  \n');
let magicians = ['Harry Potter', 'shof shof saain', 'raju chacha'];
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians);
console.log('\n  The Modify Magicians Array  \n');
function great_magician(magicians) {
    magicians.forEach(magician => {
        console.log(`The Great Magician is ${magician} .`);
    });
}
great_magician(magicians);
