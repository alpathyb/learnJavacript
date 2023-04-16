class Developer{
    constructor(name) {
        this.name = name;
    }

    commitChange(){
        console.log(`${this.name} commiting this change!`);
    }
}

function canBuildUi(developer){
    return{
        buildUi : ()=>{
            console.log(`${developer.name} build a beautifull UI in this page!`);
        }
    }
}

function canConnectApi(developer){
    return{
        connectApi : ()=>{
            console.log(`${developer.name} Connecting API to this page`);
        }
    }
}

function canTesting(developer){
    return{
        canTest :()=>{
            console.log(`${developer.name} Testing this page`);
        }
    }
}

function canBuildServer(developer){
    return{
        buildServer : ()=>{
            console.log(`${developer.name} build and deploying server`);
        }
    }
}

//start composing object
function newFrontend(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUi(developer));
}

function newBackend(name){
    const developer = new Developer(name);
    return Object.assign(developer, canConnectApi(developer));
}

function newQa(name){
    const developer = new Developer(name);
    return Object.assign(developer, canTesting(developer));
}

function newFullstack(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUi(developer),canConnectApi(developer),canBuildServer(developer));
}

// let's create two developer, one fullstack and one QA

const fullStack = newFullstack('Andika');
fullStack.commitChange();
fullStack.buildServer();

const qeEngineer = newQa('Alfath');
qeEngineer.commitChange();
qeEngineer.canTest();



