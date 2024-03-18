function make_shirt(size:string="large",message:string="I love TypeScript"):void{
    console.log(`\nShirt size:${size},Message:${message}\n`);
}
// make a large shirt with default message
make_shirt();

// make a shirt with medium size and with default message
make_shirt("medium");

// make a shirt with small size and with a new message
make_shirt("small","Welcome to TypeScript World!");