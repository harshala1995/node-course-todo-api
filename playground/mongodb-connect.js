//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new Object();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongDb server');   // alternate syntax - don't use return statement in if(). instead use if else
     const db = client.db('TodoApp');
    //
    // db.collection('Todos').insertOne({
    //     text: 'Hello World',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

   // const db = client.db('Users');

    db.collection('users').insertOne({
        name: 'Harshala',
        age: 23,
        location: 'Mumbai',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});