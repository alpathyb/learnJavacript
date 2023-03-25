let profile = {
    firstName : 'fajar',
    lastName : 'alfath',
    age : 21,
    dream : 'programming',
};

//let do a descontruction of objects

//let {firstName, lastName, age, dream} = profile;

//console.log(firstName, lastName, age, dream);

// Now we are trying to assign it to another variable names

let {firstName : localfirstname, lastName:localLastName, age : localAge } = profile;

console.log(localfirstname,localLastName,localAge);