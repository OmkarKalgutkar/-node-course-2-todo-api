// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.lob('Unable to connect to Mongodb server');
  }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //   _id: ObjectID('5a89bf272bed2413b311ef56')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find todos', err);
    // });

    db.collection('Users').find({name: 'Omkar'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to find todo', err);
    });

    // client.close();
});
