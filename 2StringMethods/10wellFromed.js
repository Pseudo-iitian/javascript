let str = 'abhishek verma';

//lastIndexOf
// The method returns the index of the last occurrence of the specified substring at a position less than or equal to position, which defaults to +Infinity. If position is greater than the length of the calling string, the method searches the entire string.
// If position is less than 0, the behavior is the same as for 0 — that is, the method looks for the specified substring only at index 0.

const paragraph = "I think Ruth's dog is cuter than your dog! I";

const searchTerm = 'I';

console.log(
  `Index from the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index from the last "dog" is 38"

