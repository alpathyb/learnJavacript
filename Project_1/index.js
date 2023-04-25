const {coffeStock, supStock} = require('./state');

class coffeMec{    
    constructor(number){
        this.number = number;
    }

    coffeType = [
        {
            coffe : 'sanger',
            condition : 'hot',
            value : 10000,
        },
        {
            coffe : 'sanger',
            condition : 'cold',
            value : 11000,
        },
        {
            coffe : 'robusta',
            condition : 'hot',
            value : 12000,
        },{
            coffe : 'arabica',
            condition : 'hot',
            value : 15000,
        },
        
    ]

    order = (menu, quantity) =>{
        console.log(`You ordered ${quantity} of ${this.coffeType[menu].coffe} and the total is Rp ${this.coffeType[menu].value * quantity}`);
    }

    makeCoffe = (type, grams) => {
        if(coffeStock[type] >= grams){
            console.log('Wait a moment your coffe is arriving');
        }else{
            console.log('Sorry, your coffe out of stock!');
        }
    }
}
console.log(coffeStock);
console.log(supStock);


const firstOrder = new coffeMec(2);
firstOrder.order(1, 2);
firstOrder.makeCoffe('Luwaks', 0);
firstOrder.makeCoffe('Robusta', 500);