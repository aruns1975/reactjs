import React, { Component, PureComponent } from 'react';
import './App.css';

class App extends Component {
  state={
      greeting: 'Hello, World',
      anotherGreeting:'',
      width:0,
      height:10
  };
  //Creation life cycle method
  componentWillMount = ()=>{
    console.log('[App]','Inside component will mount');
  }
  //Creation life cycle method
  componentDidMount=()=>{
    console.log('[App]','Inside component did mount');
    this.setState(
      {greeting: 'Hello, World'}
    )
  }
  //Update life cycle method - extenal
  componentWillReceiveProps =(nextProps) =>{
    console.log('[App]','Inside component receives props',nextProps);
  }
  //Update life cycle method - internal and extenal
  shouldComponentUpdate = (nextProps,nextState)=>{
    console.log('[App]','Inside should component update',nextState, nextState);
    console.log(nextState.greeting)
    console.log(this.state.greeting)
    return (nextState.greeting !== this.state.greeting)
  }
  //Update life cycle method - internal and extenal
  componentWillUpdate = (nextProps, nextState) => {
    console.log('[App]','Inside component will update', nextProps, nextState);
  }
   //Update life cycle method - internal and extenal
   componentDidUpdate = (nextProps, nextState) => {
    console.log('[App]','Inside component did update', nextProps, nextState);
  }
  

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
    console.log('[APP]',"I am render method");
    return (
      <div className="App">
        {this.state.greeting} <br/> 
        <input type="text" value={this.state.greeting} onChange={this.nameChangeHandler}/>
        <input type="text" value={this.state.greeting} readOnly/>
        <button onClick={this.greetArun}>Arun</button>
        <button onClick={this.display}>Display</button><br/>
        Another Greet : {this.state.anotherGreeting}
        <hr/>
        <Div greeting={this.state.greeting} nameChangeHandler={this.nameChangeHandler} changeState={this.greetArun}><h1>{this.state.greeting}</h1></Div>
        <hr/>
        <DIV greeting={this.state.greeting} nameChangeHandler={this.nameChangeHandler} changeState={this.greetArun}><h1>{this.state.greeting}</h1></DIV>
      </div>
    );
  }
}

//Statefull Component
class Div extends Component{
  componentWillMount = ()=>{
    console.log('   [Div]','Inside component will mount');
  }
  componentDidMount=()=>{
    console.log('   [Div]','Inside component did mount');
    this.setState(
      {greeting: 'Hello, World'}
    )
  }
  //Update life cycle method - extenal
  componentWillReceiveProps =(nextProps) =>{
    console.log('     [Div]','Inside component receives props',nextProps);
    this.setState(nextProps);
  }
  //Update life cycle method - internal and extenal
  shouldComponentUpdate = (nextProps, nextState)=>{
    console.log('    [Div]','Inside should component update');
    return true;
  }
  //Update life cycle method - internal and extenal
  componentWillUpdate = (nextProps, nextState) => {
    console.log('     [Div]','Inside component will update', nextProps, nextState);
  }
   //Update life cycle method - internal and extenal
   componentDidUpdate = (nextProps, nextState) => {
    console.log('      [Div]','Inside component did update', nextProps, nextState);
  }

  render(){
    console.log('   [Div]',"I am render method");
    return <div>
              {this.props.children}
              <input type="text" value={this.props.greeting} onChange={this.props.nameChangeHandler}/>
              <button onClick={this.props.changeState}>Change State</button>
            </div>
  }
}

class MyPureComponent extends PureComponent{

}
//Functional component or stateless component
const DIV=(props)=>{
  console.log('    [DIV]',"I am render method");
  return <div>
          {props.children}
          <input type="text" value={props.greeting} onChange={props.nameChangeHandler}/>
          <button onClick={props.changeState}>Change State</button>
        </div>
}
export default App;

