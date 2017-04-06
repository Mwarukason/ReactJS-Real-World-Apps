var React = require('react');
var ReactDOM = require('react-dom');

//var App = <h1>Hello, World from App Variable</h1>;


//Define component function
//dynamic function call
var Component = function(props) {
  /*var style = {
    color: props.color
  }*/
  return (
    //inline javascript
    //same also for multiple element shud be inclosed in div element tag
    <div style={{color: props.color}}>
    <h1>{props.greet}</h1>
    <h2>{props.greet}</h2>
    </div>
  );
};
/*
Components are javascript functions with objects that consumes props as a Data
and produces Views React elemnts.
*/


//render Component JSX form
ReactDOM.render(
  //by creating element will convert the the Component elemnt into JSX
  //<Component></Component>
  //to call same Component multiple times we need to put in div:
  <div>
  <Component greet="Hello World" color="blue"/>
  <Component greet="Hey there" color="green"/>
  </div>
  , //properties in Component in JSX
  document.getElementById('root')
);
