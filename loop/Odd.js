function findOdd(number){
    let n = [];

    for(i = 1; i<=number; i++){
        if(i % 2 == 0){
            n += i;
        }else{
            n += " Odd ";
        }
    }
    return n;
}

console.log(findOdd(50));