//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongDb server');   // alternate syntax - don't use return statement in if(). instead use if else
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b9f881eb33eac7a502994b6')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b96204c43c65bbd691cccfe')
    }, {
        $set: {
            name: 'Harshala'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    // client.close();
});