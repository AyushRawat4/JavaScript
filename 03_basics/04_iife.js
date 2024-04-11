//          Immediately Invoked Function Expressions (IIFE)

//   uses for to An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function chai (){
    //  also known as named IIFE
    console.log(`DataBase Connected`);
})();

// ()()  first parenthesis for funtion body or definnition and second parenthesis for function calling by this we define IIFE

( () => {
    console.log(`DB Connected 2nd time`);
})();


//  Always put semiccolon after every IIFE because that function does not know when to stop so it runs and does not alllow other IIFE functions to run .

( (name) => {
    console.log(`DB Connected 2nd time ${name}`);                  // arguements passing  in IIFE
})('Ayuhs yeahhhhhhh')
