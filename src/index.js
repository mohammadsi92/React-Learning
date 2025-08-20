import React from 'react';
import { createRoot } from 'react-dom/client';


//My first code in  react js
createRoot(document.getElementById('root')).render(<h1>Hello World</h1>);

// Now i want mack a Component
class Time extends React.Component
{
  render()
  {
    return <h1>Current Time: {new Date().toLocaleTimeString()}</h1>;
  } 
}

class App extends React.Component
{
  render()
  {
    return <div>
      <h1>My First React App</h1>
      <Time />
    </div>;
  }
}
createRoot(document.getElementById('root')).render(<App />);