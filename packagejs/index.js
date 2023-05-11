import _ from 'lodash';

//try to sum array value with lodash
//1. basic way
// const valueArray = [1,2,3,4,5];
// let sum = 0;

// for(let i = 0; i<valueArray.length; i++){
//     sum += valueArray[i];
// }

// console.log(sum);

//2. using lodash
// const valueArray = [1,2,3,4,5];
// let sum = valueArray.reduce((prev,curr) =>{
//     return prev + curr;
// });

// console.log(sum);

//3. another ways with lodash
const valueArray = [1,2,3,4,5];

const sum = _.sum(valueArray);
console.log(sum);