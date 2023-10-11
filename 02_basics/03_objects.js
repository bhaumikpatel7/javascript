// singleton

// object literals
// Object.create
const mySym = Symbol("key1")

const JsUser = {
    name:"Bhaumik",
    [mySym]:"myKey1",
    age : 24,
    location : "Toronto",
    email : "bhaumikpatel741999@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[mySym])
// console.log(JsUser["name"])

JsUser.email = "bhaumik@google.com"
// Object.freeze(JsUser)
JsUser.email = "bhaumik@microsoft.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js")
}

JsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())