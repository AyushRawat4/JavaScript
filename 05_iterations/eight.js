//  REDUCE 

const mynums = [1,2,3,4,5]

inivalue = 0

const newarr = mynums.reduce( (accumulator , nums) => accumulator + nums , inivalue )

//  in above first accumulator stores the initial value then after call back func accumulator stores the new updated value that returns from func.
//  and value of accumulator gets updated when the funnc callbacks everytime.

// console.log(newarr);

shoppinglist = [
    {
        course : 'js course',
        price : 499
    },
    {
        course : 'py course',
        price : 599
    },
    {
        course : 'dsa course',
        price : 999
    },
    {
        course : 'flutter course',
        price : 1999
    },
]

const total = shoppinglist.reduce( (acc,item) => acc + item.price , 0)

console.log(total);

