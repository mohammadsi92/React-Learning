import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css'

class Hello extends React.Component
{
    render()
        {
        return (
       <h1 className='hello'>Hello world</h1>
        )
    }
}

export default Hello