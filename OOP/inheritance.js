//Defining the problems base
/*class mailService{
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`the ${this.sender} send this message: ${message} to you ${receiver}`);
    }

    sendBroadcast(message,receivers){
        for(const receiver of receivers){
            console.log(`message sent : ${message}`);
        }
    }
}

const whatsAppServ = new mailService('fjralfath11@gmail.com');
const gmailService = new mailService('alpathyb@campaign.com');

whatsAppServ.sendBroadcast('Hello! Happy Iftar for all of you!', [1,2,3]);
gmailService.sendMessage('Hello! my name is alfath', 'rani@gmail,com');
*/

//Now create inheritance verse

class mailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`Sent this message: ${message}, to ${receiver}`);
    }
}

class waService extends mailService{
    broadMessage(message, receivers){
        for(const receiver of receivers){
            console.log(`Send this message: ${message} to ${receiver}`);
        }
    }
}

class gmailService extends mailService{
    operationMessage(message, receiver){
        if(message === "@#$*"){
            console.log(`The Sender: ${this.sender} send this message ${message} to: ${receiver}`);
        }
    }
}

const userGmail = new gmailService('alpathyb@gmail.com');
const userWa = new waService('fjralfath11@gmail.com');

userGmail.operationMessage('Hello docs','fjralfath11@gmail.com');
userWa.sendMessage('Hello friend, this is alfath','fjr');
userWa.broadMessage('This is broadcast',['raso','mico','dolo','ronald']);