function fibonacciSeq(number){
    let n1 = 0;
    let n2 = 1;
    let nexterms;

    for(i = 0; i< 2; i++){
        console.log(i);
    }
    nexterms = n1 + n2;

    while (nexterms <= number) {
        console.log(nexterms);
        n1 = n2;
        n2 = nexterms;
        nexterms = n1 + n2;
    }

}

console.log(fibonacciSeq(5));