import React from 'react'

const Div=(myClass, Children) => {
    console.log('[Div]','[render]','[Children]',Children)
    return (props) => (
       <div className={myClass}>
        <Children {...props}></Children>
      </div>
    )
}

const DivClass= (myClass, Children) => {
    return class {
        render(){
            return 
            (
                <div className={myClass}>
                    <Children {...this.props}></Children>
                </div>
            )
        }
    }
}

export {DivClass};
export default Div;