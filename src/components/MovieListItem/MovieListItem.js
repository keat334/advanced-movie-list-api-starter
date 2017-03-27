import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

const MovieListItem = props => {
  return (
    <li>
      <img src={props.posterPath} alt="movie poster" />
      <h5>{props.title}</h5>
      <Button
        onClick={event => props.onClickRemoveMovie(event, props._id)}
        type="button"
        name="remove-movie"
        className="remove-movie"
        bsStyle="danger"
      >
        Remove movie
      </Button>

    </li>
  );
};

MovieListItem.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  onClickRemoveMovie: PropTypes.func.isRequired
};

export default MovieListItem;
