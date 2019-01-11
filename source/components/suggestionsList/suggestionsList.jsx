import React from 'react';
import PropTypes from 'prop-types';
import Suggestion from 'components/suggestion';
import FlipMotion from 'react-flip-motion';

const Suggestionslist = props => (
  <div className="suggestions-list">
    <h2 className={`suggestions-list__title ${props.color}`}>
      {props.category}
    </h2>
    <FlipMotion>
      {props.suggestions.map(suggestion => (
        <Suggestion
          suggestion={suggestion}
          key={suggestion.id}
          deleteSuggestion={props.deleteSuggestion}
          likeSuggestion={props.likeSuggestion}
        />
      ))}
    </FlipMotion>
    {props.suggestions.length === 0 && (
      <h2 className="suggestions-list__empty">Ingen forslag, har du ett?</h2>
    )}
  </div>
);

Suggestionslist.propTypes = {
  suggestions: PropTypes.array,
  category: PropTypes.string,
  color: PropTypes.string,
  deleteSuggestion: PropTypes.func,
  likeSuggestion: PropTypes.func
};

export default Suggestionslist;
