import React,{Component} from 'react';
import Emp from './Emp';
import {Table} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Emps extends Component {

    render(){
        const emps=this.props.users.map(emp=>{ 
            return (
              <Emp key={emp.id} id={emp.id} name={emp.name} username={emp.username} email={emp.email}></Emp>
            )
          })
        return (
            <div className='container'>
                <Table dark>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>UserName</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {emps}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}