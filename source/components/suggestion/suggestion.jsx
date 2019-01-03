import React from 'react';
import PropTypes from 'prop-types';
import Date from 'components/date';

const Suggestion = props => (
  <div className="suggestion">
    <h2>{props.suggestion.title}</h2>
    <p>{props.suggestion.text}</p>
    <div className="suggestion__category">
      <span>{props.suggestion.category}</span>
    </div>
    <button
      className="suggestion__delete"
      onClick={() => props.deleteSuggestion(props.suggestion)}
    >
      🗑️
    </button>
    <div className="suggestion__likes">
      <button onClick={() => props.likeSuggestion(props.suggestion)}>
        {props.suggestion.likes} ❤️
      </button>
    </div>
    {props.suggestion.date && (
      <div className="suggestion__date">
        <Date date={props.suggestion.date} />
      </div>
    )}
  </div>
);

Suggestion.propTypes = {
  suggestion: PropTypes.object,
  text: PropTypes.string,
  likes: PropTypes.number,
  deleteSuggestion: PropTypes.func,
  likeSuggestion: PropTypes.func
};

export default Suggestion;
