var c =1000
let a = 9000

if(true){
let a = 100
const b = 22333
var c = 36800
// console.log(`inner ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

// ************************ FUNCTIONS INSIDE FUNCTION*************************************8

function one(){
    const usernmae = "AyushSinghRawat"

        function two(){
            const website = "YouTube"
            console.log(usernmae);
        }
        // console.log(website);                              will give error as cant acess website outside its scope
        two()
}
// one()


if (true) {
    const username = "AyushSinghRawat"
    if (username === "AyushSinghRawat") {
        const wesite = "30dayscoding"
        // console.log(username + wesite);
    }
    // console.log(wesite);                 ERROR   out of scope
    
}
// console.log(username);                    ERROE out of scope 



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! INTERRESSTING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
addOne(89)                                           //   can type funct calling above it will run ok.

function addOne(num){
     return num+1
}
 


addTwo(90)    
                                                               //  cannot call funct above function in this format it gives error 
const addTwo = function (num){                                // WE can also decalre functions like this 
    return num+2
}

//  abover function also calls as expression of function by storing it on a variable .