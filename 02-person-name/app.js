"use strict";
let namePerson = '';
namePerson = prompt(' please write your name') || '';
console.log(`your name is ${namePerson}`);
if (namePerson !== null && namePerson !== '') {
    alert(`Hello ${namePerson}, welcome to the IT CLASS !`);
}
else {
    alert(`Please enter your name`);
}
;
