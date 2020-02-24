import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
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
=======

function NameBadge(props) {
  console.log(props);
  return ( 
    <p>My name is {props.name}</p>
  )
}

class App extends React.Component {
  clickHandler(e) {
    alert("Clicked +");
    console.log(this);
    console.log(e);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World 
        </p>
        <NameBadge name="John"/>
        <NameBadge name="Ana"/>
        <NameBadge name="June"/>
>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b
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
