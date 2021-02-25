import React from 'react';

const Value = ({ value, good, neutral, bad, all, posfeed }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return <p>No feedback given</p>;
    }
    return (
        <div>
        <span className="Counter__value">Value: {value}</span>
        <br/>
        <span className="Counter__value">Good: { good }</span>
        <br/>
        <span className="Counter__value">Neutral: { neutral }</span>
        <br/>
        <span className="Counter__value">Bad: { bad }</span>
        <br/>
        <span className="Counter__value">Total: { all }</span>
        <br/>
        <span className="Counter__value">Positive Feedback: { posfeed }%</span>
        </div>
    )
};

export default Value;