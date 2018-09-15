import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Emps from './Emps';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
      users:[]
  };
  render(){
    
    
    console.log('[App]','[render]','state',this.state)
    return (
      <Emps users={this.state.users} />
    )
  }

  componentDidMount(){
    console.log('[App]','[ComponentDidMount]','Calling the service.....')
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((emps)=>{
      console.log('[App]','[ComponentDidMount]','Service returned ...',emps)
      this.setState(
        {users:emps.data}
      )
    })
  }
}


export default App;

