const name="Its String & Object practice";
console.log(name);

// task 1.1

// let str="hel  lo";
// let arr=["h","e","l","l","o"];
// console.log(str.length);
// console.log(arr.length);

// console.log(str[0]);
// console.log(arr[2]);

// // console.log(str.push("!"));  //string is immutable so cant push
// console.log(arr.push("!"));
// console.log(arr);

// task 1.2
// let str="JavaScript";
// console.log(str.split(""));

// let arr=["c","a","t"];
// console.log(arr.join(""));

// task 2.1
// let convert="  My name is Rafa  ";
// // console.log(convert.toUpperCase());
// console.log(convert.toLowerCase());
// console.log(convert.trim());

// task 3.1
// let sen="Learning JavaScript is fun!";
// console.log(sen.slice(0,9));
// console.log(sen.slice(23,28));

// task 3.2
// let str="hello";
// let str1="world";
//  console.log(str.concat(str1));

// task 4.1(using split,reverse and join)
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// task 4.1(using for loop)
// function reverseString(str){
//     let reversed="";
//     for(i=str.length-1;i>=0;i--){
//         reversed+=str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("hello"));

// task 5.1
// let student={
//     name:"Rafa",
//     age:21,
//     grade:5,
//     isEnrolled:true,
// }
// console.log(student);
// console.log(student.name);

// task 6.1
let car={
    brand:"Toyota",
    model:"Corolla",
    year:2026,

}
console.log(car.brand);
console.log(car["model"]);
car["color"]="blue";
console.log(car["color"]);
car.year="2023";
console.log(car.year);