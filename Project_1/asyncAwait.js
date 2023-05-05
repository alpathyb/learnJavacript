//convert chain promises to async await models
const {getMoney, buyTicket, goInsideCinema} = require('./promise2');

async function watchCinema(amount){
    try{
        const money = await getMoney(amount);
        const ticket = await buyTicket(money);
        const result = await goInsideCinema(ticket);

        return result;
    }catch(error){
        throw error;
    }
}

watchCinema(100)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

watchCinema(10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
