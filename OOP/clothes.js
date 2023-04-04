const tag = 1000;

class clothes {
    constructor(color, size, price){
        this.color = color;
        this.size = size;
        this.price = price;
    }

    changeClothes(color, size){
        console.log(`Your new clothes has ${color} color and ${size} size`);
    }

    buyClothes(color, price){
        console.log(`Your order is ${color} with the price ${price}`); 
    }
}

const zipper = new clothes('blue', 10,20000);
const jargo = new clothes('red',20,100000);
const lipper = new clothes('green', 11,300000);

console.log(zipper);
lipper.buyClothes(jargo.color, jargo.price);
zipper.changeClothes(lipper.color, lipper.size);

/* 
Output should be:


*/
