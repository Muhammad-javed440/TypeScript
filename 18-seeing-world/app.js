var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Paris", "London", "Tokyo", "New York", "Sydney"];
// TypeScript infers the type of 'places' as string[].
console.log(places); // Outputs: Paris, London, Tokyo, New York, Sydney
//print your array in alphabetical order without modifying the original list.
console.log(__spreadArray([], places, true).sort());
// show that your array is still in its original  order after sorting.
console.log(places);
// reverse the order of list . print the array to that its has changed.
console.log(__spreadArray([], places, true).sort().reverse());
// now check if the array is reversed or not.
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort().reverse());
