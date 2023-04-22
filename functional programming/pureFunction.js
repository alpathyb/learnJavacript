// create two pure function 

// count fibonacci to insert iterate value base on a value
// this is the lates version buat it will return undefined first 
// const countFibonacci = (a) =>{
//     n1 = 0;
//     n2 = 1;
//     temp = 0;
//     for(let i = 0; i<= a; i++){
//         console.log(n1);
//         temp = n1 + n2;
//         n1 = n2;
//         n2 = temp;
//     }
// }

// console.log(countFibonacci(5));

// count fibonacci2 to insert iterate value until value x is achieve
const countFibo2 = (x) =>{
    let x1 = 0;
    let x2 = 1;
    let temp2;

    let result = [];

    while (x1 <= x) {
        result.push(x1);
        temp2 = x1 + x2;
        x1 = x2;
        x2 = temp2;
        
    }
    return result;
}

console.log(...countFibo2(5));

//create immutability function
// write your code here
