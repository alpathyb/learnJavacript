// this file is for learning an array in js

let myArray = ['hello world',11,20,'good morning','end'];

console.log(myArray);
console.log(myArray[1]);

// now we delete and add items in myArray
myArray.push('Start','second');

//for deleting the last item in array
myArray.pop();

//for add item in the firs place
myArray.unshift('this is first');
console.log(myArray);

myArray.splice(1, 1);
console.log(`Ini adalah hasil akhir dari array ${myArray}`);