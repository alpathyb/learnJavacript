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