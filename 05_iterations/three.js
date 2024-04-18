//  HIgh Order Array Loops 

// for of 

let arr = [20,30,40,50,60,70,82,90]
for (const num of arr) {
    // console.log(`arr nums ${num}`);
}

const greetings = "hello my git hub repo!!"

for (const greet of greetings) {
    if (greet==" ") {
        continue
    }
    // console.log(greet);
}

//  MAPS 

const map = new Map();

map.set('IN', "INDA")
map.set('GER', "GERMANY")
map.set('FR', "FRANCE")
map.set('IN', "INDA")                  // do not show or stores duplicate values . 

// console.log(map);
// console.log(map.size);

for (const [key0,value1] of map) {

    // console.log(key0 ,":-", value1);
    
}

const myobject = {
    'speed' : "mcQueen",
    'friend' : "Mator",
    'legend' : "The Hudson Hornet"
}

// for (const [key , value] of myobject) {

//     console.log(key,value);
                                                        //    not work on objects like this , we have other options to run loop on object 
// }



