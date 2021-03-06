const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  console.log('get req');
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;

  const newExercise = new Exercise({
    username,
    description,
  });

  newExercise
    .save()
    .then(() => res.json('Comment added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
