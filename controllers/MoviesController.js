const MovieModel = require('../models/MovieModel');
const moviesController = {};


moviesController.list = (request, response, next) => {
  MovieModel.find().exec()
  .then(movie => {
    return response.json(movie);
  })
  .catch(err => {
    return next(err);
  });
};

moviesController.show = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
  .then(movie => {
    return response.json(contact);
  })
  .catch(err => {
    return next(err);
  });
};

moviesController.create = (request, response, next) => {
  const movie = new MovieModel({
    movieTitle: request.body.movieTitle,
    posterPath: request.body.posterPath,
    overview: request.body.overview,
    releasedate: request.body.releasedate
  });
  movie.save()
  .then(contact => {
    return response.json(movie);
  })
  .catch(err => {
    return next(err);
  });
};

moviesController.update = (request, response, next) => {
  MovieModel.findById(request.params._id)
  .then(movie => {
    movie.movieTitle = request.body.movieTitle || movie.movieTitle;
    movie.posterPath = request.body.posterPath || movie.posterPath;
    movie.overview = request.body.overview || movie.overview;
    movie.releasedate = request.body.releasedate || movie.releasedate;

    return movie.save();
  })
  .then(movie => {
    return response.json(movie);
  })
  .catch(err => {
    return next(err);
  });
};


moviesController.remove = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
  .then(movie => {
    return response.json(movie);
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = moviesController;
