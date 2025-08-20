import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'

//My first code in  react js
createRoot(document.getElementById('root')).render(<h1>Hello World</h1>);

// Now i want mack a Component
class Time extends React.Component
{
  render()
  {
    return <h1 className='timer'>Current Time: {new Date().toLocaleTimeString()}</h1>;
  } 
}
class Hello extends React.Component
{
  render()
  {
    return <h1>Hello Mohammad</h1>;
  } 
}

class App extends React.Component
{
  render()
  {
    return (
      <div className='main'>
      <h1>My First React App</h1>
        <Time />
        <Hello />
    </div>);
  }
}
//createRoot(document.getElementById('mydiv')).render(<App />);

const tick = createRoot(document.getElementById('mydiv'));

setInterval(() => {
  tick.render(<App />);
}, 1000);

