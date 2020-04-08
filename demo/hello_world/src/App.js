import React from 'react';
import logo from './logo.svg';
import './App.css';
function NameBadge(props) {     //best for simple components, no extra lines of code (same as class NameBadge)
  return (
    <p>The sum is {10 + 10}</p>
  )
}
/*class NameBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <p>The sum is {10 + 10}</p>
    //<p>The is {this.props.name}</p>    //return value is a JSX element, cannot return string, declared using XML syntax, **can't put two tags as return value**
    )                                     //whatever contents of this.props.name will be inserted into string, then HTML element will be generated
  }
}*/

class App extends React.Component {   //has a required render method
  constructor(props) {               //optional, has to call super constructor with props if used
    super(props);
  }
  render() {

//function App() {    //function component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge name="John"/>
        <p>
          This is fantastic
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
