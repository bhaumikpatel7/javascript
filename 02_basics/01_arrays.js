// arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman" ,"naagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[2])

// Array methods

// myArr.push(6) // add values at the end
// console.log(myArr)

// myArr.pop()


myArr.unshift(9)
myArr.shift()



// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)


// slice and splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3) //two difference 1 is slice do not manupate array and range is not invluded (1,3) => 1,2
console.log(myn1);
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)///two difference 1 is splice manupate array and range is invluded (1,3) => 1,2,3
console.log(myn2);
console.log(myArr)