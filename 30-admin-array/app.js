// Array of usernames
var usernames = ['user1', 'user2', 'admin', 'user3', 'user4'];
// Loop through the array and print a greeting to each user
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log("Hello ".concat(username, ", welcome back! You have special privileges."));
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", welcome back!"));
        console.log("Hello ".concat(username, ", thank you logging in again."));
    }
});
