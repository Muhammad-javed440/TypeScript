import * as readline from 'readline';

const rl =readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
// Example usage
rl.question('What is your name? ',(name: string) =>{
    console.log('hello)!,what are you doing today?');
    rl.close();
});
