// create class human with method walk, run and punch

let damage = 0;

class human{
    constructor(skin,height,weight,speciality){
        this.skin = skin;
        this.height = height;
        this.weight = weight;
        this.speciality = speciality;
    }

    walk(){
        console.log('Walking in progress');
    }

    run(){
        console.log('running in progress');
    }

    punch(){
        console.log('punch hit');
        damage += 1;
        return damage;
    }
}

const alfath = new human('white',180,70,'Juijitsu');
const raihan = new human('black',170,70,'boxing');
const ripal = new human('white',165,60,'wibu');

alfath.punch();
console.log(`Damage yang sudah diterima ${damage}`);