let evenNumber = [];

for(let i=1; i<=100; i++){
    if(i % 2 == 0){
        evenNumber.push(i);
    } 
}

console.log(evenNumber);

// now lets do a map quiz 

let currency = new Map([
    ['USD',14000],
    ['JPY', 131],
    ['SGD', 11000],
    ['MYR', 3500],
]);

const priceInJPY = 5000;

let priceInIDR = (priceInJPY * currency.get('JPY'));
console.log(priceInIDR);
