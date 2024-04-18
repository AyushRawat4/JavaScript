const codingLanguages = ['java' , 'python' , 'javascript' , 'ruby']

codingLanguages.forEach(function  (item) {

    if(item == 'java'){
        console.log(`coding ninjas java `);
      return
    }

    // console.log(item);
})

codingLanguages.forEach( (item) =>  {
    // console.log(item);
})

const a = (iteem) => {
    console.log( iteem);
}

codingLanguages.forEach(a)

codingLanguages.forEach((item,index,Array) => {
    console.log(item,index,Array);
})

const myLanguages = [

    {
        'languageName' : 'javascript',
        'languageFileName' : 'js'
    },
    {
        'languageName' : 'ruby',
        'languageFileName' : 'rb'
    },
    {
        'languageName' : 'python',
        'languageFileName' : 'py'
    }
]

myLanguages.forEach((itemss) => {
           
    console.log(itemss.languageFileName,itemss.languageName);
})