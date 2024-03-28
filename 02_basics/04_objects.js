// const user = new Object()

const user = {}

user.id = "1a2b3c"
user.name = "yaba"
user.isLogin = false
user.istall = "yess"

// console.log(user);

const regUser = {
    id : "101qwe",
    fullname : {
        userfullname : {
            fnmae : "ayush",
            lname : "rawat"
        }
    }
}

// console.log(regUser);
// console.log(regUser.fullname);
// console.log(regUser.fullname.userfullname.fnmae);


const obj1 = {1:"aaa",2:"bbb",3:"ccc"}
const obj2 = {4:"apa",5:"bob",6:"cuc"}

// const obj3 = {obj1,obj2}
 
// const obj3 = Object.assign({},obj1,obj2)          // combines two object 

const obj3 = {...obj1,...obj2}          // spread operator 
// console.log(obj3);

const users = [                             // array of objrcts
    {1: "a",
     2: "b"},
     {1: "a",
     2: "b"},
     {1: "a",
     2: "b"},
     {1: "a",
     2: "b"}
]

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("isLogin"));