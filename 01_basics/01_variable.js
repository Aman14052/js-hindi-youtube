/Const - Can not change its value/
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
/ Undefined - Declared a variable but not assigning any value to it/

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/Console.table - Used to print multiple variables in the tabular form/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
