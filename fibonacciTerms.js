function fibonacciTerms(number){
    let n1 = 0;
    let n2 = 1;
    let nexterms;

    for(i = 1; i <= number; i++){
        console.log(n1);
        nexterms = n1 + n2;
        n1 = n2;
        n2 = nexterms;
    }
}
console.log(fibonacciTerms(5));