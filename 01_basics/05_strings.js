const name = "Ayush Singh Rawat "
const repocount = 1

// console.log(name + repocount + " value");

console.log(`helllo my name is ${name} currently my repositiory count is ${repocount} .  Thankyou `);

const newName = new String('AYUSH SINGH RAWAT')


console.log(newName[3]);
console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toLowerCase());


console.log(newName.charAt(14));
console.log(newName.indexOf('W'));

const newString = newName.substring(4, 9)
console.log(newString);

const newString1 = newName.slice(-7, 13)
console.log(newString1);


const newString2 = newName.slice(-7, -2)
console.log(newString2);


const newString3 = "       Ayush           "
console.log(newString3);
console.log(newString3.trim());

const url = "https://google.com/ayush%21rawwat"

console.log(url.replace('%21' , '-'));
console.log(url.includes('rawwat'));
console.log(url.includes('rawat'));

const abc = "ayush-singh-rawat"
console.log(abc.split("-"));

