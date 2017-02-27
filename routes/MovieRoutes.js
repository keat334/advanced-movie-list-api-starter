const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);

router.get('/movies:_id', moviesController.show);

router.delete('/movies:_id', moviesController.remove);

router.post('./movies', moviesController.create);

router.put('./movies:_id', moviesController.update);

module.exports = router;
