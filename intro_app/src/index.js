var React = require('react');
var ReactDOM = require('react-dom');

//Two types of Components Class and function.
//Class for dynamic and interactive
//dynamic function call
/*
var Component = function(props) {
  return (
    <div style={{color: props.color}}>
    <h1>{props.greet}</h1>
    </div>
  );
};
*/
 //class Component must have render and return inside
 //since we're accessin props in class, we need to call "this"
var Component = React.createClass({
  render: function() {
    return (
      <div style={{color: this.props.color}}>
      <h1>{this.props.greet}</h1>
      </div>
    );
  }
});

//render Component JSX form
ReactDOM.render(
  <Component greet="Hello World" color="blue"/>

  ,
  //properties in Component in JSX
  document.getElementById('root')
);
