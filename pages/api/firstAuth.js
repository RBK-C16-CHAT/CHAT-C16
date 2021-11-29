import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email,name } = req.body;
        if (email && name) {
            User.find({ email: email }).then((result) => {
                if (result.length == 0) {
                    User.create(req.body).then((data) => { res.status(200).send(data) })
                        .catch((err) => { res.status(422).send(err) })
                }
                else {
                     res.status(200).send(result[0])
                }
            })

        }
        else {
            res.status(422).send('data_incomplete');
        }
    }
    else if (req.method === 'GET') {
        return res.send('bras omok cht7eb tgeti')
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);