import React from 'react';

const Section  = ({title, children}) => (
  <div className="Counter__controls">
    <h1>{title}</h1>
    {children}
  </div>
);

export default Section ;