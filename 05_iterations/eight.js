const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curVal) {
//     console.log(`acc : ${acc} and current value : ${curVal}`);
//     return acc + curVal
// },0)

// arrow function
const myTotal = myNums.reduce((acc,curVal) => {
    console.log(`acc : ${acc} and current value : ${curVal}`);
    return acc + curVal
},0)
console.log(myTotal);