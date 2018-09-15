import React, {Component} from 'react';
import Div,{DivClass} from './Div';

class Dept extends Component{
    render(){
      console.log('[Dept]',this.props)
      return (
        <div>
          <span>{this.props.dept_id}</span>
          <span>{this.props.dept_name}</span>
          <span>{this.props.dept_loc}</span>
        </div>
      )
    }
}

export default DivClass('myClass',Dept);