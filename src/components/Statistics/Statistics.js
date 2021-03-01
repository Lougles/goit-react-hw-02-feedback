import React from 'react';

const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return <p>No feedback given</p>;
    }
    return (
        <div>
        <span className="Counter__value">Good: { good }</span>
        <br/>
        <span className="Counter__value">Neutral: { neutral }</span>
        <br/>
        <span className="Counter__value">Bad: { bad }</span>
        <br/>
        <span className="Counter__value">Total: { total }</span>
        <br/>
        <span className="Counter__value">Positive Feedback: { positivePercentage }%</span>
        </div>
    )
};

export default Statistics;