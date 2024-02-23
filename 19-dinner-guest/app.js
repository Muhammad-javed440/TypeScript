var guest = ["Muhammad javed", "Muhammad Bilal", "Usama Ali"];
var absent_guest = guest[0];
console.log('Absent Guest :' + absent_guest);
// adding one guest in the list.
var new_guest = "Ali Humza";
guest[0] = "Ali Humza";
console.log('\nUPDATE GUEST LIST IS :\n');
console.log(' \n Mr. ' + absent_guest + ' is Absent from the Party.\n');
console.log('\n Good News ! we find a big table so we invite three more guests to join the party\n');
// adding three guests.
guest.unshift('Ahmed');
guest.splice(2, 0, 'Akber Ali');
guest.push('Hassan Iqbal');
console.log("\nAFTER ADDING NEW MEMBERS THE GUEST LIST IS:\n" + guest);
// for showing elements of array using loop
for (var i = 0; i < guest.length; i++) {
    console.log('\n Dear Mr.' + guest[i] + '\nIt is our Pleasure to invite you our party. \n Thank you \n');
}
console.log('\n Sorry! we can not arrange a big table, only two people will be invited.\n');
// 
while (guest.length > 2) {
    var removed_guest = guest.pop();
    console.log('\nSorry Mr.' + removed_guest + ',You are not invited for dinner.\n');
}
// only two guests remaining. 
for (var i = 0; i < guest.length; i++) {
    console.log('\n Dear Mr.' + guest[i] + '\n,You are still invited for dinner. \n Thank you \n');
}
// all guests removed from  list.
guest.splice(0, 2);
console.log(guest);
// Now the list of guests array is empty.
//exercise no    ....   19    ................
console.log('remaining number of guests :' + guest.length);
