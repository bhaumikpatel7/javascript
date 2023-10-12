const user = {
    username: "Bhaumik",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let username = "Bhaumik"
//     console.log(this.username);
// }


const chai = () => {
        let username = "Bhaumik"
        console.log(this.username);
     }
//chai()

const addTwo = (num1,num2) =>num1+num2;


console.log(addTwo(2,3));