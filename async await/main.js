const { buyTollRoadCard,topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess(){
    try {
        const roadCard = await buyTollRoadCard(25);
        const balance = await topUpBalance(roadCard, 10);
        await useTollRoad(balance);

    } catch (error) {
        throw error;
    }
}

//call the function back
getTollAccess()
