import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
      emps:[
        {id:1,name:'Arun',age:23,salary:10000},
        {id:2,name:'Raghu',age:25,salary:14000},
        {id:3,name:'Kumar',age:34,salary:10600},
        {id:4,name:'Ravi',age:29,salary:10032},
      ],
      depts:[
        {id:1,name:'Accounts',loc:'First Floor'}
      ]
  };
  render(){
    const emps=this.state.emps.map(emp=>{ 
      return (
        <EmpWrapper key={emp.id} id={emp.id} name={emp.name} age={emp.age} salary={emp.salary}></EmpWrapper>
      )
    })
    const depts=this.state.depts.map(dept=>{ 
      return (
        <DeptWrapper key={dept.id} dept_id={dept.id} dept_name={dept.name} dept_loc={dept.loc}></DeptWrapper>
      )
    })
    console.log(emps)
    return (
      <Dummy>
        {emps}
        {depts}
      </Dummy >
    )
  }
}
const Dummy=(props) => {
    return props.children
}
const Div=(myClass, Children) => {
  return (props) => (
     <div className={myClass}>
      <Children {...props}></Children>
    </div>
  )
}
class Emp extends Component{
  render(){
    console.log('[Emp]',this.props)
    return (
      <div>
        <span>{this.props.id}</span>
        <span>{this.props.name}</span>
        <span>{this.props.age}</span>
        <span>{this.props.salary}</span>
      </div>
    )
  }
}
const EmpWrapper=Div('myClass',Emp);

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
const DeptWrapper=Div('myClass',Dept);

export default App;

