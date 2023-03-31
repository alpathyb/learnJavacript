// create 3 function to multiply, add, and divide

function multiply(a,b){
    return a*b;
}

function add(a,b){
    return a+b;
}

function divide(a,b){
    return a/b;
}

console.log(add(2,3),multiply(2,3),divide(6,2));

// Now lets create the function to check give the simple of multipy, add and divide


function test(d,e,f){
    let hasil;
    if(f === 'kali'){
        hasil = d*e;
    }else if(f === 'bagi'){
        hasil = d/e;
    }else if(f === 'tambah'){
        hasil = d+e;
    }else{
        console.log('Undefined');
    }
    return hasil;
}

console.log(test(2,5,'bagi'));