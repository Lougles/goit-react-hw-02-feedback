import React from 'react';
import './Counter.module.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    all: this.props.initialValue,
    positive: this.props.initialValue,
  }
  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      if (prevState.value === 0) {
        return;
      }
      return {
        value: prevState.value - 1,
      }
    });
  }
  handleGoodIncrement = () => {
    this.setState((prevState) => {
        return {
          good: prevState.good + 1,
          all: prevState.all + 1,
      } 
    });
  }
  handleNeutralIncrement = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
      all: prevState.all + 1,
    }));
  }
  handleBadIncrement = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
      all: prevState.all + 1,
    }));
  }
  render() {
    const positive = this.state.good !== 0 ? ((this.state.good / this.state.all) * 100) : 0;
    return (
      <div className="Counter">
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onGood={this.handleGoodIncrement}
          onNeutral={this.handleNeutralIncrement}
          onBad={this.handleBadIncrement}
        />
        <Value
          value={this.state.value}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          all={this.state.all}
          posfeed={positive}

        />
      </div>
    )
  }
}

export default Counter;