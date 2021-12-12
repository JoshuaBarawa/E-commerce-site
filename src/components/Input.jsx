import React from 'react'

function Input({type, id, placeholder, value}) {
    return (

  <div className="form">
    <input type={type} id={id} value={value} placeholder={placeholder}/>
  </div>
    )
}

export default Input
