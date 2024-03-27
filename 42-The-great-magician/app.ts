// make an array of magicians

let magicians:string[]=['Harry Potter','shof shof saain','raju chacha'];

function great_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(`The Great Magician is ${magician} .`);
    });
}
great_magician(magicians);