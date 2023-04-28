function getData(isOffline, callback) {
    //simulate network delay or API full

    setTimeout(() =>{
        const data = [1,2,3,4,5];

        if(isOffline){
            callback(new Error('cannot call data due offline'),null);
            return;
        }

        callback(null, data);
    }, 3000);
}

function dataCallback(error,data){
    if(error){
        console.log('process failed: ', error.message);
        return;
    }

    console.log('process success:', data);
    
}

getData(true, dataCallback);
getData(false, dataCallback);