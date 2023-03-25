let foods = ['donut','fried rice','chicken wings','pasta','meatball'];
let bevarages = ["orange's juice",'tea','coffe','choco'];

//using spread operator to combine two arrays in one

const menu = [...foods, ...bevarages];
console.log(...menu);

//let's using spread in objects

let personA = {
    name : 'alfath',
    age : 21,
    height : 164,
};

let personB = {
    hobby : 'Gym',
    dream : 'Programmers (QE, PM, Android Dev) with 10000$ per year',
};

// now let's call and combine with spread operator

let newPerson = {...personA, ...personB };
console.log(newPerson);