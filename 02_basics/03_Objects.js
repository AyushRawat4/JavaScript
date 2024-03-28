//  Singelton
//   Objects.create                                   // for making objects with constructor



//  Objects Literals

const mySym = Symbol("key1")


const newUser = {
    name : "Ayush",
    [mySym] : "mykey",
    "full name" : "Ayush Singh Rawat",
    gender : "Male",
    age : 22,
    isLoggedIn : false,
    location : "Delhi",
    email : "ayush.rawat@gmail.com"

}

console.log(newUser.location)
console.log(newUser["location"])
console.log(newUser["full name"]);
// console.log(newUser.full name);                  E R R O R

// console.log(typeof newUser.mySym);
// console.log(newUser[mySym]);
// console.log(typeof newUser[mySym]);

newUser.email = "rawat.ayush@.com"
// Object.freeze(newUser)                       //   freezinfg the object so no one can changes its value 

newUser.email = "rawat.ayush@microsoft.com"        // didnt changes value because we freeze  the object 

// console.log(newUser);

newUser.greetings = function(){
    console.log("hello , js user")
}
console.log(newUser.greetings());


newUser.greetingsYwo = function(){
    console.log(`hello , ${this["full name"]} new  js user`)
}
console.log(newUser.greetingsYwo());
