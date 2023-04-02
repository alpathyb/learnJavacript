/* 
Create a function called minimal with these rule:
a. accepting 2 arguments number, a and b.
b. Return a smallest number between a and b
c. if the values is same, than return with a.

Todo your code bellow here
*/
const minimal = (a, b) =>{
    let result = 0;
    if(a <= b){
        return a;
    }
    else{
        return b;
    }
}

// a smallest, output must be a
console.log(minimal(1, 4));

//b smallest, output must be b
console.log(minimal(3, 2));

// equal output must be a
console.log(minimal(3, 3));

/* 
Create a function named findIndex, this function could accept 2 parameters
are array and number. This function could return index value base on the number value 
from the array.

    findIndex([1, 2, 3, 4, 5], 3) // output: 2
    findIndex([1, 2, 3, 4, 5], 6) // output: -1
    findIndex([1, 2, 3, 4, 5], 5) // output: 4

*/

const findIndex = (array, number) => {return array.indexOf(number);}

console.log(findIndex([1,2,3,4,5], 5));