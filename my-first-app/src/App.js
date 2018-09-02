import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
      greeting: 'Hello, World',
      anotherGreeting:'',
      width:0,
      height:10
  };
  greetArun = ()=>{
    console.log("I am fired");
    this.setState({
        greeting: 'Hello, Arun'
    });
    
  }
  nameChangeHandler = event => {
    this.setState({
      greeting: event.target.value,
      width:this.state.width+1
    });
  }
  display = () => {
    console.log('Calling display',this.state.greeting);
    this.setState({
      anotherGreeting : this.state.greeting
    });
  }
  render() {
    console.log("I am render method");
    return (
      <div className="App">
      {this.state.greeting} <br/>> 
       <input type="text" value={this.state.greeting} onChange={this.nameChangeHandler}/>
       <input type="text" value={this.state.greeting} readOnly/>
       <button onClick={this.greetArun}>Arun</button>
       <button onClick={this.display}>Display</button><br/>
       Another Greet : {this.state.anotherGreeting}
      </div>
    );
  }
}

export default App;

