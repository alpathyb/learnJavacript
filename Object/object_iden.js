const alfath = {
    rambut : 'lurus',
    mata : 'coklat',
    tinggi : 164,
    berat : 59,

};

console.log(alfath);
console.log("=======================");

// then remove one property from alfath object

delete alfath.mata;
alfath.dream = 'Programmer with 10000$ per year';

console.log(`my dream is to be a ${alfath.dream}`);
console.log(`my height is ${alfath.tinggi} cm`);
console.log(alfath);