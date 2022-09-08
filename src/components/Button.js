import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  color, name, width, handleClick,
}) => (
  <button
    className="bold-size focus"
    onClick={() => handleClick(name)}
    type="button"
    style={{ backgroundColor: color, width: width === true ? '50%' : '25%' }}
  >
    {name}
  </button>
);

Button.defaultProps = {
  color: '##fffefe',
  width: 1,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  width: PropTypes.bool,
};

export default Button;
