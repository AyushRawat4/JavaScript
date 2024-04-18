const myObject = {
    'js' : 'javascript',
    'cpp' : 'c++',
    'java' : 'java',
    'rb': 'ruby'
}

for (const key in myObject) {
    console.log(`key value pair of ${key} : ${myObject[key]}`);
}

const arr1 = [ 10,20,30,405,50,60,70,80]

for (const key in arr1) {
               
    console.log(arr1[key]);
}


// const map = new Map();

// map.set('IN', "INDA")
// map.set('GER', "GERMANY")
// map.set('FR', "FRANCE")
// map.set('IN', "INDA") 

// for (const key in map) {
    
//     console.log(key,value);

// }