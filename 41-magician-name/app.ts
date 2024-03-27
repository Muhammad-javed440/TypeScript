// make an array of magicians

let magicians:string[]=['Harry Potter','shof shof saain','raju chacha'];

function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians);