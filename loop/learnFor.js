let baris = 5;
let pola = '';
let pola2 = '';

for(let i = 0; i <= baris; i++){
    for(let n = 0; n <= i; n++){
        pola += 'x';
    }
    pola += '\n';
}

console.log(pola);

// now lets do a reverse

for (let a = 0; a > baris; a++){
    for(let b = 5; b >= a; b--){
        pola2 += 'x';
    }
    pola2 += '\n';
}

console.log(pola2);