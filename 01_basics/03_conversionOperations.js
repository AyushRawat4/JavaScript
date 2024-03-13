  let score = undefined

  console.log(typeof score);
  console.log(typeof (score));

  let inNumber = Number(score)
  console.log(typeof inNumber);
  console.log(inNumber);

    // 33        => 33
   // "33abc"   => NaN (not a number) [datatype number]
  //  true => 1    false => 0
 //   null  =>   0
//  undefined  => Nan


let isLoggedIn = 0
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

let isLoggedIn1 = "ayush"
let booleanLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanLoggedIn1)

// 1 => true ; 0 => false
// "" => false
// "ayush" => true

let someNumber = 32
let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);