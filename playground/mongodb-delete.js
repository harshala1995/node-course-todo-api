//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongDb server');   // alternate syntax - don't use return statement in if(). instead use if else
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: "To eat"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "To eat"}).then((result) => {                //deletes the first occurrence
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('users').deleteMany({name: 'Harshala'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndDelete({_id: new ObjectID("5b961fc1fa25e6bc8b2c34ed")}).then((result) => {
        console.log(result);
         });
    // client.close();
});