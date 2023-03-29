let restaurant = {
    'name' : 'Bakso Mang Dicoding',
    'city' : 'Bandung',
    'favorite drink' : 'Es Teh',
    'favorite food' : 'Bakso',
    'isVegan' : false,
};

let {'name' : name, 'favorite drink': favoriteDrink} = restaurant;

console.log(name);
console.log(favoriteDrink);