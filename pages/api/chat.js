import connectDB from '../../middleware/mongodb';
import Message from '../../models/message';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { message,user } = req.body;
        Message.create(req.body)
        .then((data)=>{return res.status(201).send(data)})
        .catch((err)=>{return res.status(500).send(err)})
        
    }
    else if (req.method === 'GET') {
       Message.find().sort({'since': 1}).all()
       .then((data)=>{return res.status(200).send(data)})
       .catch((err)=>{return res.status(500).send(err)})
    }
    else {
        return res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);