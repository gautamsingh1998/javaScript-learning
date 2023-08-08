// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//chai()

(function db() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('Gautam')

