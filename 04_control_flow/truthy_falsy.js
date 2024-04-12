const userEmail = []

if (userEmail) {

    console.log(`User Email Verify`);

    
}
else console.log(`user emalil not verified`);

//  FALSY VALUES    

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN .  values other than that are truth values  .

//  TRUTHY VALUES 

//  "0" , 'false' , [] , " " , {} , function(){}

if (userEmail.length == 0) {
    console.log(`array is empty`);
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length==0) {
    console.log(   `object is empty `);
    
}

//  INTERVIEW BASED ONLY      false == 0    => true
                            //   false == ''   => true
                            //    0 == ''       => true 

//  Nullish coalescing Operator (??)   null   undefined 

let val1;
// val1 = 4 ?? 56
// val1 = null ?? 88
// val1 =undefined ?? 909
val1 = null ?? undefined ?? 880


console.log(val1);

//  Ternary Operator 

//  condition ? true : false 

const price = 9999

price >=1000 ? console.log(`more than budget `) : console.log(` can purchase easily `);

