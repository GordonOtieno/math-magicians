import React from 'react';
import Calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonContainer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    this.setState(Calculate({ total, next, operation }, btnName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App common-width">
        <Display total={total} operation={operation} next={next} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
