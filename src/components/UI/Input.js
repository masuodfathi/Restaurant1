import React, { forwardRef } from 'react'

const Input = forwardRef((props,ref) => {
    
  return (
    <section >
        <label htmlFor={props.Input.id}>{props.Input.label}</label>
        <input ref={ref} {...props.Input} placeholder=''/>
    </section>
  )
});

export default Input