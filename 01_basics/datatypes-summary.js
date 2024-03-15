//         Primitive    
//  7 Types : string , number , boolean , bigInt , null , undefined , symbol 

const score = 100
const score1 = 100.10

const isLoggedIn = true
const outsideTemp = null                     // empty not zero 
let email ;                                     // undefined  nor null or zero

const id = Symbol('234')
const idNew = Symbol('234')

console.log(id==idNew);



//   Reference (non-primitive)

    // Array , object , function

   
    const cartoon = ["tom&jerry" , "kickbuttwoski" , "shinchan" ];
    
    let objs = {
        name : "ayush",
        age : 22
    }

    let myFunction = function( ) {
        console.log('hello world');
    }

    console.log(typeof myFunction);


    // *******************************************************************************************************************************
     
    // M E M O R Y
    
    //  Stack(primitive) , Heap (non-primitive)

    let firstName = "ayush"
    let lastName = firstName
      lastName = "rawat"

      console.log(firstName);
      console.log(lastName);
      
    let user1 = {
        email : "abc@gmail.com",
        upi: "123@ybl"

    }  

    let user2 = user1

    user2.email = "ayush@gmail.com"

    console.log(user1.email);
    console.log(user2.email);