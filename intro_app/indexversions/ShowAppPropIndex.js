var React = require('react');
var ReactDOM = require('react-dom');
var shows = require('./shows.json')//other file not js must be specified extension eg. json else wont be recognised
var Show = require('./Show');




//render Component JSX form
ReactDOM.render(
  <div>
  <Show show={shows[0]}/>
  <Show show={shows[1]}/>
  <Show show={shows[2]}/>
  </div>,
  //properties in Component in JSX
  document.getElementById('root')
);
