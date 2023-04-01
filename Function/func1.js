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

//now lets deconstructing objec and using it to function

const user1 = {
    name : 'Alfath',
    age : 21,
    hobby : 'gym',
};

function intro({name, age, hobby}){

console.log(`Hello my name is ${name}! I was ${age} years old and my hobby is ${hobby}`);
}

// calling using user1
intro(user1);

// calling using user2 , // proven wrong ways!
console.log(intro);

// create the custom parameter to create multiply

function mult(...numbers){
    let result = 1;
    for(let temp of numbers){
        result = temp * result;
    }
    return result;
}
console.log(mult(1,2,3,4,5));


