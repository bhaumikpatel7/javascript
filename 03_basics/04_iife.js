//An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop

(function chai(){
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
}) ("Bhaumik");

