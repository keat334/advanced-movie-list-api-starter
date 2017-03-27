import React, {PropTypes} from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

const MovieList = props => {
  return (
    <Row>
      <hr />
      <ul className="movie-list">
        <h1>Movie List</h1>
        {props.savedMovies.map(savedMovie => {
          return (
            <Col key={savedMovie._id} xs={6} md={2} className="movie-list-item">
              <MovieListItem
                {...savedMovie}
                key={savedMovie._id}
                onClickRemoveMovie={(event, index) => props.onClickRemoveMovie(event, index)}
              />
            </Col>
          );
        })}
      </ul>
    </Row>
  );
};

MovieList.propTypes = {
  savedMovies: PropTypes.array.isRequired,
  onClickRemoveMovie: PropTypes.func.isRequired
};

export default MovieList;
