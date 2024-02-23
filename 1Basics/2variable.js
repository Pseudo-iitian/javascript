const accountId = 32424;
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur";
let accountState; // not declared will be treated as undefined

// we can not assign new variable to a constant one

accountEmail = "cd@google.com";
accountPassword = "4324324";
accountCity = "Delhi";
// console.log(accountId,accountEmail,accountPassword,accountCity); // print all values sepearated by commas

/* prefer not to use {var} in case of block scoped and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity]);