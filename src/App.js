import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css'

import Timer from './Timer';
import Hello from './Hello';

class App extends React.Component
{
  render()
  {
    return (
      <div className='main'>
      <h1 className='main'>My First React App</h1>
        <Timer />
        <Hello />
    </div>);
  }
}

export default App