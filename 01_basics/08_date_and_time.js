let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleDateString());


// let myTimeStemp = Date.now()
// console.log(myTimeStemp)
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDate())

newDate.toLocaleDateString('defualt' , {
    weekday:"long"
})