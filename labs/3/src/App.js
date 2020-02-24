import React from 'react';
import './App.css';
import Card from './components/Card/index.js';

function App() {
  return (
    <div className = "card">
      <h3>This is a title</h3>
      <p>This is the content</p>
      <Card content="This is a card!"/>
      </div>
    )
}

export default App; 
