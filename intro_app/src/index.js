var React = require('react');
var ReactDOM = require('react-dom');


//<h1>Hello World<h1> in HTML
/* Using HTML
 <ul>
  <li>Apple</li>
  <li>Mango</li>
  <li>Orange</li>
 </ul>
*/
//in react, to create the content element tag h1 which will spit out our
//heading onto the webpage
//React.createElement([tagcreated],[Attributenull],[contentoftag])
//var App = React.createElement('h1', null,'Hello World');
// React.createElement(type, attrib/props, child,child2)
//creating element tag using JSX valid javascript the consice way of creating
//javascript in more effective way readable and cleaner using
//var App = <h1>Hello, World</h1>

//babeljs.io for live conversion of react JSX and React.createElement
//List of fruits elements using JSX
/*var App = (
  <ul>
   <li>Apple</li>
   <li>Mango</li>
   <li>Orange</li>
  </ul>
)*/


//we need to inform react element(App) to display it on webpage using DOM.
//reactDOM.render([whattorender], [where/Target]);
/*ReactDOM.render(
  App,
  document.getElementById('root')
);
*/

//render Component BY creating react and use component as argument
/* ReactDOM.render(
  //by creating element will convert the the Component elemnt into JSX
  React.createElement(Component),
  document.getElementById('root')
);
*/


//var App = <h1>Hello, World from App Variable</h1>;


//Define componeNt function
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
