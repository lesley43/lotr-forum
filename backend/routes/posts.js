const router = require('express').Router();
let Post = require('../models/post.model');

// this is /posts/
router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// this is /posts/add
router.route('/add').post((req,res) => {
  const username = req.body.username;
  const postBody = req.body.postBody;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    postBody,
    date,
  });

  newPost.save()
    .then(() => res.json('Post Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// this is /posts/<DatabaseID>
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// this is /posts/update/<DatabaseID>
router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.postBody = req.body.postBody;
      post.date = Date.parse(req.body.date);

      post.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
