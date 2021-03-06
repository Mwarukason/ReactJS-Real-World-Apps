import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerText: "Welcome to React",
      contentText: "Mwarukason ReactJS Page"
    };
  }
  render() {
      
    { 
      /* 
          Implementation of JSX
          Adding some javaScriipts and applying into html.
          The declaration occur outside Return and below Render
          NameTags for html re in small and Reacts starts with  Capital
      */
    }

      {
        /*
          Props: properties (create state for each component)
          created under component and 
        */
      }

       {
        /*
          The use of props to pass data explained in tabular form
          used a raw component to pass data created in json array
        */
      }

    return (
      <div className="App">
       {
         /*
       <h1>{this.state.headerText}</h1>
        <p>{this.state.contentText}</p>
        */
       }
            
       <Header />
       <Content />  
       </div>
    );
  }
}

// default propertioes created and used
App.defaultProps = {
  header: 'default Props for header..',
  content: 'default Props for content..'
}



class Header extends Component{
  render(){
        var myStyle = {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#800000'
      };
    return(
    <div style={myStyle} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
    </div>
    )
  }
}

class Content extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0,
    };
    this.updateMystatus =this.updateMystatus.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDomNode = this.findMyDomNode.bind(this);
  }

  updateMystatus() {
    var count = this.state.count;
    count++;
    var item = "Click - "+count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray, count: count});
  }
  forceUpdateRandomNumber(){
    this.forceUpdate();
  }
  findMyDomNode(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'yellow';
  }
  render() {
    return (
        <div className="App-intro">
          <h1>Component API!</h1>
          <p>Mwarukason Dashbord Over API Views</p>
          <button onClick = {this.updateMystatus}>CLICK ME</button>
          <h4>State Data: {this.state.data}</h4>
          <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
          <h4>Random Number: {Math.random()}</h4>
          <button onClick={this.findMyDomNode}>Find My Node</button>
          <div id="myDiv">This is My DIV</div>
      </div>
    );
  }
}


export default App;
