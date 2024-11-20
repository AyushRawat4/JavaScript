//  MAPS

const newnums = [1,2,3,4,5,6,7,8,9,10]

// const mynums = newnums.map( (nums) => { return nums *10})

const mynums = newnums
                    .map( (nujs) => nujs *10 )
                    .map( (nuwh) => nuwh+4)
                    .filter( (hinb) => hinb >45 )

// above thing is called chaining method in which we can use multiple method like map , filter for better output and 
// when 1st method is called it passes new updated values to next method then it execute on new updated values.


console.log(mynums);


