const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// 
console.log(typeof myDate);

let myCreatedDate = new Date(2001 , 3 , 3)      // month start from 0
// console.log(myCreatedDate.toDateString());

let newDate = new Date("2023-04-03")
// console.log(newDate.toLocaleString());


let newDate1 = new Date("04-03-2020")
// console.log(newDate1.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);   // gives output in milisecond
console.log(myCreatedDate.getTime());     // always compares date on millisecond basis
console.log(Math.floor(Date.now() / 1000));        // millisecond converted to seconds



let newDate2 = new Date()
// console.log(newDate2)
// console.log(newDate2.getDate())
// console.log(newDate2.getDay())
// console.log(newDate2.getMonth()+1)
// console.log(newDate2.getTimezoneOffset())


newDate2.toLocaleString('default', {
    weekday : 'long'
})
console.log(newDate2);









