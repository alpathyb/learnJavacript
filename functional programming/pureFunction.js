// create two pure function 

const countFibonacci = (a) =>{
    n1 = 0;
    n2 = 1;
    temp = 0;
    for(let i = 0; i<= a; i++){
        console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}

console.log(countFibonacci(10));