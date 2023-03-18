let baris = 5;
let pola = '';

for(let i = 0; i <= baris; i++){
    for(let n = 0; n <= i; n++){
        pola += 'x';
    }
    pola += '\n';
}

console.log(pola);