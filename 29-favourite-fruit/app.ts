// Array of favorite fruits
let favoriteFruits: string[] = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];

// Independent if statements to check for certain fruits
if (favoriteFruits.includes('apple')) {
    console.log('I love apples!');
}

if (favoriteFruits.includes('banana')) {
    console.log('Bananas are great too!');
}

if (favoriteFruits.includes('orange')) {
    console.log('Oranges are refreshing!');
}

if (favoriteFruits.includes('grapes')) {
    console.log('Grapes are delicious!');
} else {
    console.log('I don\'t have grapes in my favorite fruits list.');
}
// • Make a array of your three favorite fruits and call it favorite_fruits.

let favoriteFruits2: string[] = ['watermelon', 'pineapple', 'peach'];
console.log(favoriteFruits2);

//Write five if statements. Each should check whether a certain kind of
//  fruit is in your array. If the fruit is in your array,
//  the if block should print a statement, such as You really like bananas!
//  If the fruit isn’t in your array, the else block should print a different
//   statement, such as Bananas aren’t on your list.

for (let i = 0; i < favoriteFruits2.length; i++) {
    if(favoriteFruits2[i] === 'watermelon'){
        console.log(`You really like ${favoriteFruits2[i]}!`);
        }else{
            console.log(`${favoriteFruits2[i].toLowerCase()} is in your list.`);
            }
}