function fiboTerms(number){
    let n1 = 0;
    let n2 = 1;
    let temp;

    for(i = 0; i <= number; i++){
        console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}

fiboTerms(5);