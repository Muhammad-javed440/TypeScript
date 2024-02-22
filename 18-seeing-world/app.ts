let places:string[] = ["Paris", "London", "Tokyo", "New York", "Sydney"];
// TypeScript infers the type of 'places' as string[].
console.log(places); // Outputs: Paris, London, Tokyo, New York, Sydney

//print your array in alphabetical order without modifying the original list.
console.log([...places].sort());

// show that your array is still in its original  order after sorting.
console.log(places);
// reverse the order of list . print the array to that its has changed.
console.log([...places].sort().reverse());
// now check if the array is reversed or not.
console.log(places);
console.log(places.reverse());
// again check if the array is reversed or not.
console.log(places.reverse());
console.log(places.sort().reverse());
