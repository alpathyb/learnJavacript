//right now we build to use promise berantai

function getMoney(amount){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(amount > 1000){
                reject(new Error('not enough money!'));
            }resolve(amount);
    },1000);
    });
}

function buyTicket(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money < 100){
                reject(new Error('not enough money to buy ticket!'));
        }
        resolve(money);
    },1000);
});
}

function goInsideCinema(ticket){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!ticket){
                reject(new Error('you do not have ticket!'));
            }
            resolve('enjoy the movie mate!');
        },1000);
    });
}

module.exports = {getMoney, buyTicket, goInsideCinema};

// function watchCinema(withdraw){
//     getMoney(withdraw)
//         .then((money)=>{
//             return buyTicket(money);
//         })
//         .then((ticket)=>{
//             return goInsideCinema(ticket);
//         })
//         .then((result)=>{
//             console.log(result);
//         })
//         .catch((error)=>{
//             console.log(error.message);
//         })
// }

//now let's run the code
//you can change the number on the parameter to fill the value of
//how much money you would take
// watchCinema(10);