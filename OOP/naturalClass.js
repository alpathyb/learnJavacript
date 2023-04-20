// create original class to manipulate the data

// create class date

const date = new Date();

const timeAceh = date.toLocaleDateString('id-ID',{
    timeZone : 'Asia/singapore',
});

const timeJakarta = date.toLocaleDateString('id-ID',{
    timeZone : 'Asia/Jakarta',
});

const timeCoventry = date.toLocaleDateString('en-GB',{

    timeStyle : 'full',
    timeZone : 'Europe/london',
})

console.log(timeAceh);
console.log(timeJakarta);
console.log(timeCoventry);

console.log('===================================');

//let's create another original class

class UniqueArray extends Array {
    constructor(...args){
        const uniqueValue = args.filter((item, index)=> args.indexOf(item) === index);
        super(...uniqueValue);
    }

    push(item){
        if (!this.includes(item)){
            super.push(item);
        }
    }

}

const numberArray = new UniqueArray(1,2,3,1,2,3);
console.log(numberArray);

// push some items with same number to the array
numberArray.push(1);
numberArray.push(4);
console.log(numberArray);