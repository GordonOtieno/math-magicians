import React from 'react';

import '../App.css';

class Calculator extends React.PureComponent {
  render() {
    const calcButtons = [];
    ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((item) => {
      calcButtons.push(
        <button
          type="button"
          value={item}
          key={item}
        >
          {' '}
          {item}
        </button>,
      );
    });
    return (
      <div className="wrapper">
        {' '}
        <div className="show-input"><p className="calcInput">0</p></div>
        <div className="digits flex">{calcButtons}</div>
        <div className="operations subgrid">
          <button type="button" value="+">
            +
          </button>

          <button type="button" value="-">
            {' '}
            -
            {' '}
          </button>

          <button type="button" value="*">
            {' '}
            *
          </button>

          <button value="/" type="button">
            {' '}
            /
          </button>
          {/* "=" btn */}
          <button
            type="button"
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
