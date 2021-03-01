import React from 'react';

const FeedbackOptions  = ({options}) => (
  <div className="Counter__controls">
    <button type="button"  data-name="good" onClick={options}>Good</button>
    <button type="button"  data-name="neutral" onClick={options}>Neutral</button>
    <button type="button"  data-name="bad" onClick={options}>Bad</button>
  </div>
);
export default FeedbackOptions ;

