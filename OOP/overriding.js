// lets create a code contains constructor of overriding and method overriding

class mailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMsg(msg,receiver){
        console.log(`message: ${msg}. Sent to: ${receiver} from ${this.sender}`);
    }
}

class waService extends mailService{
    // let's create on overriding constructor
    constructor(sender,status,receiver){
        super(sender);
        this.status = status;
    }

    broadMsg(sender,status,receiver){
        for(const receivers of receiver){
            console.log(`this sender: ${sender} with status: ${status} to those receivers: ${receivers}`);
        }
    }
}

const user1 = new waService('fajar', 'legal');
console.log(user1);