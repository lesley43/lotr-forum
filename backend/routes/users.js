const router = require('express').Router();
let User = require('../models/user.model');

// this is /users/
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// this is /users/add
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({
    username,
    password,
  });

  newUser.save()
    .then(() => res.json('User created'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

//eventually add update and delete
