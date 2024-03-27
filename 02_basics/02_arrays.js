const marvel_H = ["thor", "groot", "rocket","yondu"]
const dc_H = ["flash", "batman", "robin","deadpool"]
 
// marvel_H.push(dc_H)       // puts whole array into that and treat as a element

// console.log(marvel_H);

// console.log(marvel_H[4]);      //gets the array inside array 
// console.log(marvel_H[4][1]);     // gets the elements of array inside array.


const all_H = marvel_H.concat(dc_H)         // concaat only two arrays
// console.log(all_H);

const allnew_H = [...marvel_H, ...dc_H]    // spread method combines multiple arrays more than 2. array = [...arr1, ...arrr2, ...arr3]
console.log(allnew_H);


const another_Array = [1,2,3,4,[5,6,7],8,9,[10,[11,12,13,14,[15,16,17]]]]
const new_another_Array = another_Array.flat(Infinity)            // joins all elements of array inside array and provide a new array as all elements in one array.

console.log(new_another_Array)


console.log(Array.isArray("Ayuhs00"));
console.log(Array.from("Ayuhs00"));
console.log(Array.from({name : "rawat"}));    // intersting topic.  gives empty arrray as we it cannot convert it because we need to tell to convert keys or values in to array.


let num1 = 1000
let num2 = 4000
let num3 = 6000

console.log(Array.of(num1,num2,num3));        // combines different variables , objects etc to an arraay.



