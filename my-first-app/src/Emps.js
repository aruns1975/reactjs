import React,{Component} from 'react';
import Emp from './Emp';
import {Table} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Emps extends Component {
    constructor(){
        super();
        this.state ={users:[
            {id:1,name:'Arun',username:'aruns1975',email:'arun.sarma@gmail.com'},
            {id:2,name:'Kumar',username:'aruns1975',email:'arun.sarma@gmail.com'}
        ]};
    }
    render(){
        console.log('Inside emps');
        console.log(this.props);
        const emps=this.state.users.map(emp=>{ 
            return (
              <Emp key={emp.id} id={emp.id} name={emp.name} username={emp.username} email={emp.email}{...this.props}></Emp>
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