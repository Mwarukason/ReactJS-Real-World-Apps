import React, { Component } from 'react';
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
          <h4> Stateless Header Component </h4>
    </div>
    )
  }
}


class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          "id": 112112345,
          "name": "AMRI",
          "age": "27"
        },
        {
          "id": 112112265,
          "name": "AQILAH",
          "age": "22"
        },
        {
          "id": 112112332,
          "name": "SIHABA",
          "age": "56"
        }
      ]
    }
  }
  render(){
      
    return(
    <p  className="App-intro">
          <h1> Mwarukason ReactJS Page</h1>
          <h4> Stateless Content Component </h4>
    
    <table>
      <thead>
        <th>
          <td>ID</td>
          <td>NAME</td>
          <td>AGE</td>
        </th>
      </thead>
      <tbody>
        {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
      </tbody>
    </table>
    </p>
    )
  }
}

class TableRow extends Component{
  render(){      
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
