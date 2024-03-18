function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("\nShirt size:".concat(size, ",Message:").concat(message, "\n"));
}
// make a large shirt with default message
make_shirt();
// make a shirt with medium size and with default message
make_shirt("medium");
// make a shirt with small size and with a new message
make_shirt("small", "Welcome to TypeScript World!");
