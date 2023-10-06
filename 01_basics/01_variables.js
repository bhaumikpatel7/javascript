const accountId = 12345
let accountEmail = "bhaumik@gmail.com"
var accountPassword = "1232323"
accountCity = "toronto"
let accountState;

// accountId = 2 not allowed

// prefer not to use var , because of issue in block scope and functional scope
accountEmail = "bb@bb.com"
accountPassword="1212121"
accountCity = "Newyork"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])