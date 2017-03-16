import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      {/* 
          Implementation of JSX
          Adding some javaScriipts and applying into html.
          The declaration occur outside Return and below Render
          NameTags for html re in small and Reacts starts with  Capital
      */}

    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
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
       <p>   <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h4> Stateless Header Component </h4>
      </p>
    </div>
    )
  }
}

class Content extends Component{
  render(){
      var i = 1;
    return(
    <p  className="App-intro">
          <h1> Mwarukason ReactJS Page</h1>
          <h4> Stateless Content Component </h4>
    </p>
        
    )
  }
}


export default App;
