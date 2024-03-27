//    A R R A Y S

const myArr = [2,4,67,4,56,6]
const newArr = [2,4,true,4,"ayush",6]
const gamesArr =["clash of clans","clash royale","BGMI","Csndy Crush"]

const arr = new Array(1,2,3,4,5,6,7,8) 

// console.log(myArr[2]);
// console.log(newArr[2]);


//   A R R A Y    Methods 

myArr.push(55)
myArr.push(99)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(77)          // inserts the value in 0th indexx
// console.log(myArr);
myArr.shift()              // remove the value from 0th indexx
// console.log(myArr);

// console.log(myArr.includes(99));       // array.in......  for questioning elements in array 
// console.log(myArr.indexOf(55));

const strArr = myArr.join()
// console.log(myArr);
// console.log(strArr);
// console.log(typeof strArr);



//     S L I C E AND S P L I C E

console.log("A :",myArr);

const myn1 = myArr.slice(1,3)      // slice some part of array and show that  and did not affect the org array.
console.log(myn1);

console.log("B :",myArr); 
const myn2 = myArr.splice(1,3)      // splice includes the last value as well as affect on org array and put away the splice part.
console.log(myn2);
console.log("C :",myArr);

