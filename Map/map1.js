const denah = new Map();

// now lets add some 
denah.set('jakarta', 'Indonesia');
denah.set('london', 'England');
console.log(denah.size);
console.log(denah);

// assign new map

let user = new Map([
    [1, 'head'],
    [2, 'eyes'],
    [3, 'hair'],
    [4, 'mouth'],
]);

console.log(user);

user.delete(2);
console.log(user);