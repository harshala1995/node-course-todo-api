//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongDb server');   // alternate syntax - don't use return statement in if(). instead use if else
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b922dbb05c02e6466f08e26')
    // }).toArray().then((docs) => {                    //instead of using promises you can also directly use a callback function as .toArray((docs, err) => {})
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Could not fetch data from todos', err);
    // });

    db.collection('users').find({name: "Harshala"}).toArray().then((docs) => {                    //instead of using promises you can also directly use a callback function as .toArray((docs, err) => {})
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Could not fetch data from todos', err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Count of todos:', count);
    // }, (err) => {
    //     console.log('Could not count data from todos', err);
    // });
   // client.close();
});