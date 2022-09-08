import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import ButtonPanel from './ButtonContainer';

const Calculator = () => {
  const [state, setState] = useState(0);

  const handleClick = (event) => {
    setState((state) => Calculate(state, event.target.textContent));
  };

  return (
    <div className="calculatorPageContainer">
      <h2 className="calculatorTitle">It&apos;s Time For Maths!</h2>
      <div className="container">
        <div className="display">{state.next || state.total || 0}</div>
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};
export default Calculator;
