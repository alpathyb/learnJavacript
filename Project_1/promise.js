// function getDatas (isOffline){
//     //return a promise object

//     return new Promise ((resolve, reject) => {
//         //simulate network delay
//         setTimeout (() =>{
//             const data = [1,2,3,4,5];

//             if (isOffline){
//                 reject(new Error ('Cannot retrive users due offline'));
//                 return;
//             }

//             resolve(data);
//         }, 3000);
//     });
// }

//getDatas isOflline == false
// getDatas(false)
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message));

//getDatas isOflline == true
// getDatas(true)
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message));




// now let's try with another methode call promisify
const {promisify} = require('util');


function getDatas(isOffline, callback){
    //simulate network delay
    setTimeout(()=>{
        const data = [1,2,3,4];
        if(isOffline){
            callback(new Error('cannot get data'),null);
            return;
        }

        callback(null,data);
    },2000);
}

const getDataPromise = promisify(getDatas);

getDataPromise(false)
    .then((data) =>  {
        console.log(data);
    }).catch((err) => {
        console.log(err.message);
    });
