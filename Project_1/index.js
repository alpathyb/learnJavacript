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

    order = (type, quantity) =>{
        console.log(`You ordered ${quantity} of ${this.coffeType[type].coffe} and the total is Rp ${this.coffeType[type].value * quantity}`);
    }
}

const {coffeStock, supStock} = require('./state');
console.log(coffeStock);
console.log(supStock);


const firstOrder = new coffeMec(2);
firstOrder.order(1, 2);