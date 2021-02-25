import React from 'react';

const Controls = ({ onIncrement, onDecrement, onGood, onNeutral, onBad }) => (
  <div className="Counter__controls">
    {/* <button type="button" onClick={onIncrement}>Увеличить на 1</button>
    <button type="button" onClick={onDecrement}>Уменьшить на 1</button> */}
    <button type="button" onClick={onGood}>Good</button>
    <button type="button" onClick={onNeutral}>Neutral</button>
    <button type="button" onClick={onBad}>Bad</button>
  </div>
);

export default Controls;