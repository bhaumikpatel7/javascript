const userEmail = []

if (userEmail) {
    console.log("got user email");
}
else {
    console.log("Don't have user email");
}

// falsy value => false , 0 -0, bigIng , "" , 0n, null ,undefined, NaN

//truthy value => "0" , 'false' , " ",[],{},function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

// Nullish Coalescing operator (??) : null underfined

let val1;
// val1 = 5 ?? 10 
// val1 = undefined ?? 15
// val1 = null ?? 10
console.log(val1);


// termary operator

const iceTeaPrice = 100;

iceTeaPrice > 80 ? console.log("Greater than 80"):console.log("less than 80")