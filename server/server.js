var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength:1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
//
// var newTodo = Todo({
//   text: 'Book an Uber'
// })
//
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
var Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = Users({
  name: 'Omkar Kalgutkar',
  email: 'omkarkalgutkar@gmail.com'
})

newUser.save().then((doc) => {
  console.log('Saved User ', doc);
}, (e) => {
  console.log('Unable to save user');
});
