import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions, {asyncAction} from './actions';


class Dept extends Component{
    clickHandler() {
       this.props.dispatch(asyncAction());
    }
    render() {
      console.log('[Dept]',this.props)
      return (
        <div>
          <h1>Inside DEPT</h1>
          <button onClick={this.clickHandler.bind(this)}>Click Me</button>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
  if(state) {
    return {
      loading: state.loading,
      result: state.result
    }
  }
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dept);