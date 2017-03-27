import React, {PropTypes} from 'react';
import {
  Row,
  Col,
  Button,
  FormControl
} from 'react-bootstrap';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <Row>
      <Col>
        <form onSubmit={event => props.onSubmit(event)}>
          <FormControl
            value={props.value}
            onChange={event => props.onChange(event)}
            type="text"
            name="search-field"
            id="search-field"
            placeholder="Search for a movie"
          />
          <Button
            type="submit"
            name="search-submit"
            className="search-submit"
            bsStyle="success"
          >
            Search
          </Button>
        </form>
      </Col>
    </Row>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
