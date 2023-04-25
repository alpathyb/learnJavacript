//Todo 1
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "validationError";
    }
}


//Todo 2
function validateNumberInput(n1,n2,n3){
   if(typeof n1 !== "number"){
    throw new ValidationError('Argumen pertama harus number');
   }else if(typeof n2 !== "number"){
    throw new ValidationError('Argumen kedua harus number');
   }else if(typeof n3 !== "number"){
    throw new ValidationError('Argumen ketiga harus number');
   }
}


const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a,b,c);
  
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
    return 'Segitiga sembarang';
    }catch(error){
    return error.message;
}

  };

  //still error and find to solve it!
  console.log(detectTriangle(1,b,1));
 
