const name = "Bhaumik"

const repoCount = 50;

// console.log(name + repoCount + " Value"); // not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interpolation

const gameName = new String('bhaumik-bp')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))

// const newString = gameName.substring(0,4)
// console.log(newString)

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString)

// const newString1 = "    Bhaumik  "
// console.log(newString1.trim())
// console.log(newString1)

const url = "https://bhaumik.com/bhaumik%20patel"

console.log(url.replace('%20' , '-'))
console.log(url.includes('%'))
console.log(url.split('%'))



