import React from 'react';
import './Counter.module.css';
import FeedbackOptions  from '../FeedbackOption/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    all: this.props.initialValue,
    positive: this.props.initialValue,
  }

  changeValue = (event) => {
    const field = event.target.dataset.name;
      this.setState((prevState) => ({
      [field]: prevState[field] + 1,
      all: prevState.all + 1,
    }));
  }
  countPositiveFeedbackPercentage = () => {
    return (this.state.good !== 0 ? ((this.state.good / this.state.all) * 100) : 0).toFixed(2);
  }
  render() {
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad, all } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.changeValue} />
        </Section>
        <Section title="Statistics">
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={all}
            positivePercentage={positive}
          />
        </Section>
      </div>
    )
  }
}

export default Counter;