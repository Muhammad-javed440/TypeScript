// Array of usernames
const usernames: string[] = ['user1', 'user2', 'admin', 'user3', 'user4'];

// Loop through the array and print a greeting to each user
usernames.forEach(username => {
    if (username === 'admin') {
        console.log(`Hello ${username}, welcome back! You have special privileges.`);
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${username}, welcome back!`);
        console.log(`Hello ${username}, thank you logging in again.`);
    }
})
