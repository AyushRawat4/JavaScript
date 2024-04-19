// const codingLanguages = ['java' , 'python' , 'javascript' , 'ruby']

//  const values = codingLanguages.forEach((item) => {

//     // console.log(item);
//     return
// })

// console.log(values);        //  will give undefined bcoz for eeach loop does not return values .


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.filter((nums) => {
    
//     return nums>4
// })

//  can also use abovr func by for each loop like this : 

const newNums = []

myNums.forEach( (items) => {
    if (items >4) {
        newNums.push(items)
        
    }
})



// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let values = books.filter( (bk) => bk.genre === 'History'  )
// let values = books.filter( (bk) => bk.genre === 'History')

values=books.filter( (bk) =>  { return bk.edition>2004 && bk.genre==='History'})

  console.log(values);

