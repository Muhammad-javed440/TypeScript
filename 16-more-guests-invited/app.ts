let guest:string[]=["Muhammad javed","Muhammad Bilal", "Usama Ali"];

// for(var i=0; i<guest.length; i++){
    // console.log('Dear Mr.'+guest[i] +'\n\n It is our Pleasure to invite you our party. \n\n Thank you !');
//}
let absent_guest=guest[0];
console.log('Absent Guest :'+absent_guest);
let new_guest:string="Ali Humza";
guest[0]="Ali Humza";
console.log('UPDATE GUEST LIST IS :');
for(var i=0; i<guest.length; i++) {
console.log('\n\n Dear Mr.'+guest[i]+ '\n\nIt is our Pleasure to invite you our party. \n\n Thank you sir !\n\n...............')
}
console.log('  Mr. '+ absent_guest+ ' is Absent from the Party.');