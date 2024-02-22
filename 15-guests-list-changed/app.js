var guest = ["Muhammad javed", "Muhammad Bilal", "Usama Ali"];
// for(var i=0; i<guest.length; i++){
// console.log('Dear Mr.'+guest[i] +'\n\n It is our Pleasure to invite you our party. \n\n Thank you !');
//}
var absent_guest = guest[0];
console.log('Absent Guest :' + absent_guest);
var new_guest = "Ali Humza";
guest[0] = "Ali Humza";
console.log('UPDATE GUEST LIST IS :');
for (var i = 0; i < guest.length; i++) {
    console.log('\n\n Dear Mr.' + guest[i] + '\n\nIt is our Pleasure to invite you our party. \n\n Thank you sir !\n\n...............');
}
console.log('  Mr. ' + absent_guest + ' is Absent from the Party.');
