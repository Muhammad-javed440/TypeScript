
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Example usage
rl.question('What is your name? ', function (name) {
    console.log("Hello, ".concat(name, "!,What are you doing Today?"));
    rl.close();
});
