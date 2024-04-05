function sayMyName() {console.log("A");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");}

// sayMyName()

// function addTwoNums(num1 , num2){
//     console.log(num1+num2);
// }

function addTwoNums(num1 , num2){
    const result = num1+num2
    return result
}

const result= addTwoNums(4,"a")
// console.log(`Result : ${result}`);

function loginMessage(username="ayush"){
    if(!username){                         // or if(username===undefined)
               console.log("enter a valid username"); 
    return
   }
    return `${username} welcome to our website`
}
// console.log(loginMessage("YABA DABA DOO"));

// !username: This checks if username is falsy. Falsy values in JavaScript
//  include false, 0, '' (empty string), null, undefined, and NaN.


function calculateCartPrice (val1,val2,val3,...num1){                          //  ... Rest operator combines all values and put them into an array
    return num1
}

console.log(calculateCartPrice(500,300,392,452,456,7899,9002));

const user = {
    username: "qwert",
    price : 3449
}

function handleObject(anyobject){
    console.log(`our prime guest ${anyobject.username} with total price of : ${anyobject.price}`);
}

// handleObject(user)     // OR 
handleObject({
    username : "ayush",
    price : 3224
})

const newArray = [100,200,300,400,500,600]

function getElements(arr1){
    console.log(`the value of 3rd elemnt in array ${arr1[2]}`);
}

// getElements(newArray)

getElements([300,4,399,499,3003])