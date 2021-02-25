import React from 'react';
import Counter from '../Counter/Counter';


const App = () => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <Counter initialvalue={10}/>
    </div>
  );
}

export default App;
