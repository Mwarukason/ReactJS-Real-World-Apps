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
  render() {
    return (
      <div>
        <div className="App-intro">
          <h1>Props Validations!</h1>
          <p>Mwarukason Dashbord Prop Validation Views</p>
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
          <h4>Boolean: {this.props.propBool ? "True" : "False"}</h4>
          <h4>Function: {this.props.propFunc(6)}</h4>
          <h4>String: {this.props.propString}</h4>
          <h4>Number: {this.props.propNumber}</h4>
          <h4>Object: {this.props.propObject.objectName1}</h4>
          <h4>Object: {this.props.propObject.objectName2}</h4>
          <h4>Object: {this.props.propObject.objectName3}</h4>
        </div>
      </div>
    );
  }
}


Content.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

//default values assigned from created propoerties
Content.defaultProps = {
  propArray: [2,5,3,4,6],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 27,
  propString: "AMRI",
  propObject: {
    objectName1: "Nyani",
    objectName2: "Chura",
    objectName3: "Tembo"
  }
}

export default App;
