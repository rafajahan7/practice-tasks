// // simple array
// let retired=[ "messi","neymar","ronaldo"];
// console.log(retired);

// // array length
// console.log(retired.length);

// // show index 0 and index 2
// console.log(retired[0], "and", retired[2]);

// // change value of index 1
// retired[1]="salah";
// console.log(retired);

// // add one item at end
// retired.push("emi");
// console.log(retired);

// // remove last item
// retired.pop("emi");
// console.log(retired);

// // add one item to start
// retired.unshift("luca");
// console.log(retired);

// // remove first item
// retired.shift("luca");
// console.log(retired);

// // check to see the value exists
// console.log(retired.includes("emi"));

// // check position of an index
// console.log(retired.indexOf("ronaldo"));



// // for loop in array
// let win=["France", "Argentina", "Spain"];
// for(let i=0; i<win.length; i++){
//     console.log(win[i]);
// }

// // while loop in array
// let goat=["Messi","Neymar","Ronaldo"];
// let i=0;
// while(i<goat.length){
//     console.log(goat[i]);
//      i++;
// }

// // combine two arrays into one
// let combined= win.concat(goat);
// console.log(combined);

// // take a portion of the array whitout changing original
// let someGoat= goat.slice(1,3);
// console.log(someGoat);

// // turn an array of words in single sentence string
// let words=["today", "feels", "empty"];
// let sentence= words.join("");
// console.log(sentence);

// check two variables one array and one not and log which one is not array
let arg="messi";
let fifa=["2022", "2026"];
console.log(arg);
console.log(fifa);
if(!Array.isArray(arg)){
    console.log("arg not array");
}
if(Array.isArray(fifa)){
    console.log("fifa array");
}