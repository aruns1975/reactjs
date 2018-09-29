import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Emps from './Emps';
import dept from './Dept';
import EmpView from './EmpView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, NavLink as Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions, {asyncAction} from './actions';



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
    console.log('[Component]', '[App]','[props]', this.props);
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

  componentDidMount() {
    
    this.props.callAction1({a:890, b:763});
    this.props.dispatch(actions.ACTION2({a: 123, b:456}));
    this.props.dispatch(asyncAction());
  }
}

const mapStateToProps = (state) => {
  if(state) {
    return {
      result: state.result
    }
  }
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    callAction1: params => {
      dispatch(actions.ACTION1(params));
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

