import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Emps from './Emps';
import dept from './Dept';
import EmpView from './EmpView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, NavLink as Link} from 'react-router-dom';



class App extends Component {
  diplayMenu(){
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" activeClassName='active'to="/emps">Emp</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" activeClassName='active' to="/dept">Dept</Link>
        </li>
      </ul>
    );
  }
  render(){
    return (
      <div>
        {this.diplayMenu()}
        <h1>Components</h1>
        <Route path='/emps' exact component={Emps}/>
        <Route path='/emps/:id' component={EmpView}/>
        <Route path='/dept' component={dept}/>

      </div>
    );
  }
}


export default App;

