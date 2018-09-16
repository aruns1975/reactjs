import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class EmpView extends Component {
    render(){
        console.log(this.props)
        return (
            <div>Emp: {this.props.match.params.id}</div>
        );
    }

    componentDidMount(){
        //todocode,retrive your data from server
    }
}