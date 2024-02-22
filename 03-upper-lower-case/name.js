var personName = '';
personName = prompt('Enter your name') || '';
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join('');
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ",here are your name in:\n    lowercase: ").concat(lowercase, "\n    uppercase: ").concat(uppercase, "\n    titlecase: ").concat(titlecase, "\n    "));
}
else {
    alert('please enter your name');
}
