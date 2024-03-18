//list of current users
var current_users = ['Ali', 'Mohammad', 'Noor', 'Sara', 'Javed'];
//list of new users
var new_users = ['ali', 'hammad', 'hassan', 'riaz', 'javed'];
// convert current users in to lower case
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
console.log(current_users_lower);
//loop through new users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // convert new user in to lower case
    var new_users_lower = new_user.toLowerCase();
    // Check if new username already exists in current_users
    if (current_users_lower.includes(new_users_lower)) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
