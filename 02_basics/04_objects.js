// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname :{
            firstname:"Bhaumik",
            lastname:"Patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)
// console.log(regularUser.fullname.userfullname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj4 = {
    5:"a",
    6:"b"
}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3) 


const users = [
    {
        id:1,
        email:"B@gmail.com"
    },
    {
        id:2,
        email:"c@gmail.com"
    },
    {
        id:3,
        email:"d@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // True
// console.log(tinderUser.hasOwnProperty('isLogged')); // False

const course = {
    coursename : "JS in Hindi",
    price: 999,
    courseInstructor : "Bhaumik"
}

const {courseInstructor} = course
// console.log(courseInstructor);
// {
//     name : "Bhaumik",
//     coursename1 : "JS in Hindi",
//     price1 : 3000
// }

