//list of current users
let current_users:string[]=['Ali', 'Mohammad','Noor', 'Sara','Javed'];

//list of new users
let new_users:string[]=['ali', 'hammad','hassan','riaz' ,'javed'];

// convert current users in to lower case

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());
 console.log(current_users_lower);

 //loop through new users list
for(let new_user of new_users){

// convert new user in to lower case

let new_users_lower:string =new_user.toLowerCase();

// Check if new username already exists in current_users
if (current_users_lower.includes(new_users_lower)){
    console.log(`Sorry, the username '${new_user}' is not available. Please choose a different username.`);
} 
else { console.log(`The username '${new_user}' is available.`);
}
}
