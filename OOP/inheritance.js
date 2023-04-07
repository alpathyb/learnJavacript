//Defining the problems based on what we need

class mailService{
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