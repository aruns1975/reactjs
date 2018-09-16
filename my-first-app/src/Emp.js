import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Emp extends Component{
    gotoLink(){
      this.props.history.push('/emps/'+this.props.id)
    }
    render(){
      console.log('[Emp]',this.props)
      return (

        <tr scope='row' onClick={this.gotoLink.bind(this)}>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.username}</td>
          <td className='col-3'>{this.props.email}</td>
        </tr>
      )
    }
}

export default Emp;
