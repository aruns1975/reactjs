import React, {Component} from 'react';


class Dept extends Component{
    render(){
      console.log('[Dept]',this.props)
      return (
        <div>
          <h1>Inside DEPT</h1>
        </div>
      )
    }
}

export default Dept;