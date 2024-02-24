let a = "hello world".indexOf(""); // returns 0
let b = "hello world".indexOf("", 0); // returns 0
let c = "hello world".indexOf("", 3); // returns 3
let d = "hello world".indexOf("", 8); // returns 8
console.log([a,b,c,d]);

let str = "hello, world!";


/*
The method returns the index of the first
occurrence of the specified substring at a position greater than or equal to position,
which defaults to 0. If position is greater than the length of the calling string, the method doesn't search
the calling string at all. If position is less than zero, the method behaves as it would if position were 0.
 */


console.log(str.indexOf("h",0));