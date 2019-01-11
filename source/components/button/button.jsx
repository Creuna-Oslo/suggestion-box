import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    <span>{props.text}</span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
