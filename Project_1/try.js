const json = '{"first_name" : "Fajar", "last_name" : "Alfath", "age" : 21 }';

try{
    const user = JSON.parse(json);

    if(!user.first_name){
        throw new SyntaxError("'first_name' is required!");
    }


    errorCode;

    console.log(user.firstName);
    console.log(user.last_name);
    console.log(user.age);
}catch (error){
    // console.log(error.firstName);
    // console.log(error.message);

    // console.log(`JSON Error : ${error.message}`);
    //code catch error with instanceof

    if(error instanceof SyntaxError){ 
        console.log(`JSON Error : ${error.message}`);  
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
}