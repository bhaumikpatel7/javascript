const coding = ["js","ruby","cpp","python","java"];

// coding.forEach( function (index){console.log("bhaumik "+ index);} )

// coding.forEach((index)=>{console.log("bhaumik "+ index);}) // arrow function

const myCoding = [
   { 
    languageName : "javascript",
    LanguageFileName : "js"
},
   { 
    languageName : "java",
    LanguageFileName : "java"
},
   { 
    languageName : "python",
    LanguageFileName : "py"
}
]

myCoding.forEach((item)=>{

    console.log(item.languageName);
})