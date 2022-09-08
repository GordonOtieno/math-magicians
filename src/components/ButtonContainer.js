import React from 'react';
import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
  const btns = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const { handleClick } = props;

  return (
    <div>
      <div className="buttons-container">
        {btns.map((button) => (
          <button type="button" key={button} onClick={handleClick}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ButtonPanel;
