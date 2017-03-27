import React, {PropTypes} from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import './MovieDetails.css';

const MovieDetails = props => {
  const {movieDetails: {
    posterPath,
    title,
    releaseDate,
    overview,
    display
  }} = props;

  let searchResult;

  const attributes = {
    posterPath,
    title,
    releaseDate,
    overview
  };

  if (!props.movieDetails.noResultFound) {
    searchResult = (
      <Row className={
        display ? 'movie-details-visible' : 'movie-details-hidden'
      }>
        <Col>
          <section>
            <img src={posterPath} alt="movie poster" />
            <h3>{title}</h3>
            <h5>{releaseDate}</h5>
            <p>{overview}</p>
          </section>
          <Button
            onClick={event => props.onClickAddMovie(event, attributes)}
            type="button"
            name="add-movie"
            className="add-movie"
            bsStyle="primary"
          >
            Add Movie
          </Button>
          <Button
            onClick={event => props.onClickDismiss(event)}
            type="button"
            name="dismiss-results"
            className="dismiss-search"
            bsStyle="danger"
          >
            Dismiss
          </Button>
        </Col>
      </Row>
    );
  } else {
    searchResult = (
      <Row className={
        display ? 'movie-details-visible' : 'movie-details-hidden'
      }>
        <Col>
          <section>
            <p>No results found!</p>
            <Button
              onClick={event => props.onClickDismiss(event)}
              type="button"
              name="dismiss-message"
              className="dismiss-search"
              bsStyle="danger"
            >
              Dismiss
            </Button>
          </section>
        </Col>
      </Row>
    );
  }

  return searchResult;
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.object.isRequired,
  onClickAddMovie: PropTypes.func.isRequired,
  onClickDismiss: PropTypes.func.isRequired
};

export default MovieDetails;
