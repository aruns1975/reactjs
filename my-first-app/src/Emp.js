import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Emp extends Component{
    render(){
      console.log('[Emp]',this.props)
      return (
        <tr scope='row'>
         <td>{this.props.id}</td>
         <td>{this.props.name}</td>
         <td>{this.props.username}</td>
         <td className='col-3'>{this.props.email}</td>
        </tr>
      )
    }
}

export default Emp;
