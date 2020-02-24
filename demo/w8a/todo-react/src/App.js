import React from 'react';
import logo from './logo.svg';
import './App.css';
const todoList1 = [
  { completed: true, priority: 1, content: 'Complete demo' },
  { completed: true, priority: 2, content: 'Complete demo 2' },
  { completed: true, priority: 1, content: 'Complete demo 2' },
  { completed: true, priority: 2, content: 'Complete demo 2' },
  { completed: false, priority: 3, content: 'Complete demo 3' }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}

function App() {
  let array = todoList1.map((value) =>  // arrow method automatically returns expression to the right of it
  <TodoItem content={value.content}
    priority={value.priority}
    completed={value.completed}/>
  )
  return (
    array
  );
}

export default App;
