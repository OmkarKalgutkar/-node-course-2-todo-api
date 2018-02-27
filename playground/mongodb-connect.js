// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var user = {
//  name: "Omkar",
//  age: 40
//  }
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //   text: 'First Task to do',
    //   completed: false
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('Unable to insert Todo', err);
    //   }


      // db.collection('Users').insertOne({
      //   name: 'Omkar',
      //   age: 40,
      //   location: 'USA'
      // }, (err, result) => {
      //   if(err) {
      //     return console.log('Unable to insert user', err);
      //   }
      //
      //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
      //
      // });

    client.close();
});
