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
  //initialise the tag with blue color using function getInitialState
  getInitialState: function() {
    return{
      color: 'blue'
    }
  },
//props associate with both functionComponent and classCompponent while
//state associate only with classCompponent.
//classCompponent refered as stateFull Component while
//functionComponent refered as stateless Component
  handleButtonClick: function() {
    this.setState(function(prevState) {
    return {
      //conditionStatement:
      //if prevState equal to blue, change to green else change to blue again.
      color: (prevState.color === 'blue' ? 'green' : 'blue')
    };
    });
  },

  render: function() {
    return (
      <div>
      <div style={{color: this.state.color}}>
      <h1>{this.props.greet}</h1>
      </div>
      <button onClick={this.handleButtonClick}>CLICK ME</button>
      </div>
    );
  }
});

//render Component JSX form
ReactDOM.render(
  <Component greet="Hello World" />,
  //properties in Component in JSX
  document.getElementById('root')
);
