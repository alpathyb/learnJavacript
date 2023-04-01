const addmult = (a) => {
    let temp;
    let n1 = 0;
    let n2 = 1;
    for(let i = 0; i <= a; i++){
        console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}

addmult(10);