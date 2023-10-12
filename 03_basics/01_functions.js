

function sayMyName(){
    console.log("B");
    console.log("h");
    console.log("a");
    console.log("u");
    console.log("m");
    console.log("i");
    console.log("k");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result
//    console.log("bhaumik"); // nothing print after return
    return number1 + number2
}

// addTwoNumbers(2,"a")
// addTwoNumbers(2,null)

const result = addTwoNumbers(3,4)

// console.log(`Result :${result}`);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("please enter a username");
        return;

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("bhaumik"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2999))

const user = {
    username : "Bhaumik",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username : "Khushali",
    price : 299
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){

    return getArray[1]

}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]))