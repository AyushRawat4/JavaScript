//  for looop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log(`5 is the fd gd gali ds`);
    }
    // console.log(element);

    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop hahahha ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`innnner loop hahahhaha ${j} of outer loop ${i} hehehe`);    
        // console.log(`${i} * ${j} =  ${i*j}`);    
    }
    
}

const myArray = ['ice golem','firecracker','inferno tower','valkrye','wizard','barrel goblins','mega knight','witch']
const len = myArray.length
console.log(len);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//  Break and Continue 

for (let i = 1; i < 20; i++) {
    if (i==5) {
        // console.log(`5 comes now go out `);
        break;
        
    }
    // console.log(`value of i is : ${i}`);
    
}

for (let i = 1; i < 20; i++) {
    if (i==5) {
        continue
        
    }
    console.log(`value of i is : ${i}`);
    
}


