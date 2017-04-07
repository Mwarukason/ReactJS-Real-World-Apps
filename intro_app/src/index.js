var React = require('react');
var ReactDOM = require('react-dom');
var shows = require('./shows.json')//other file not js must be specified extension eg. json else wont be recognised
var Show = require('./Show');


//create functional Component Shows:
//react can create multiple instances and used to render in webpage
//with different states
var Shows = function(props){
  return(
  <div>
    <Show shows={props.shows} showIndex={0} />
    <Show shows={props.shows} showIndex={0} />
    <Show shows={props.shows} showIndex={0} />
  </div>
);
};


//render Component JSX form
ReactDOM.render(
  //change to start the show in given index:
//<Show shows={shows} showIndex={1}/>,
  //properties in Component in JSX
  <Shows shows={shows} />,
  document.getElementById('root')
);
