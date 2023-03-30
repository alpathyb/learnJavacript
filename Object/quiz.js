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

//another code

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);