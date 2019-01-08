import React from 'react';
import PropTypes from 'prop-types';
import Date from 'components/date';
import Button from 'components/button';
import cn from 'classnames';

class Suggestion extends React.Component {
  static propTypes = {
    // suggestion: PropTypes.object
    // text: PropTypes.string,
    // likes: PropTypes.number,
    // deleteSuggestion: PropTypes.func,
    // likeSuggestion: PropTypes.func
  };

  state = {
    liked: false
  };

  render() {
    const props = this.props;

    const toggleLike = () => {
      this.setState({ liked: !this.state.liked }, () => {
        props.likeSuggestion(props.suggestion, this.state.liked);
      });
    };

    return (
      <div className="suggestion">
        <h2>{props.suggestion.title}</h2>
        <p>{props.suggestion.text}</p>
        <div className="suggestion__category">
          <span>{props.suggestion.category}</span>
        </div>
        <Button
          className="suggestion__delete"
          onClick={() => props.deleteSuggestion(props.suggestion)}
          text="🗑️"
        />
        <div className={cn('suggestion__likes', { liked: this.state.liked })}>
          <Button onClick={toggleLike} text={`${props.suggestion.likes} ❤️`} />
        </div>
        {props.suggestion.date && (
          <div className="suggestion__date">
            <Date date={props.suggestion.date} />
          </div>
        )}
      </div>
    );
  }
}

export default Suggestion;
