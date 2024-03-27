"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
let album1 = make_album("Asim Azhar", "DARD");
let album2 = make_album("Zara noor", "JHOOM");
let album3 = make_album("Azaan Shaami", "IK LAMHA", 15);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
