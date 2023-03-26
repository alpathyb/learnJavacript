let Menu = ['chicken wings','soup','coffe','tea','fried rice'];

//now let's destructuring the array
let [firstFood, secondFood, thirdFood, fourthFood, fifthFood] = Menu;

console.log(firstFood, secondFood, thirdFood, fourthFood, fifthFood);

// create parameter assignment 

let myFood = 'fried chicken';
let hisFood = 'bakwan';

[myFood, hisFood] = Menu;

console.log(`I ordered ${myFood}, and his ordered ${hisFood}`);