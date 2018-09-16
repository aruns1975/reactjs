import React from 'react'

const Div=(myClass, Children) => {
    console.log('[Div]','[render]','[Children]',Children)
    return (props) => (
       <div className={myClass}>
        <Children {...props}></Children>
      </div>
    )
}

export default Div;