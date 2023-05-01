const { promisify } = require('util');

function getProvinces(countryId, callback) {
    setTimeout(() => {
      if (countryId === 'id') {
        callback(null, [
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return;
      }
  
      callback(new Error('Country not found'), null);
    }, 1000);
  }

const getProvincesData = promisify(getProvinces);

getProvincesData('id')
    .then((provinces) =>{
        console.log(provinces);
    }).catch((error) =>{
        console.log(error.message);
    });

module.exports = {getProvinces: getProvincesData};
