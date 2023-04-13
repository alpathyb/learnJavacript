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

    broadMsg(status,receiver){
        for(const receivers of receiver){
            console.log(`this sender: ${this.sender} with status: ${status} to those receivers: ${receivers}`);
        }
    }

    sendMsg(msg, receiver){
        super.sendMsg(msg,receiver);

        console.log('Sent it via WhatsApp');
    }
}

const user1 = new waService('fajar', 'legal');
const user2 = new mailService('alfath');

user2.sendMsg('hello world!','taesan');
user1.sendMsg('Halo','alfath');
user1.broadMsg('Business',['ripal','rehan','ampon']);

//now lets create overriding method

