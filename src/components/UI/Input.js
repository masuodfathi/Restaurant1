import React from 'react'

const Input = (props) => {
    console.log('input ' + props.Input.id)
  return (
    <section >
        <label htmlFor={props.Input.id}>{props.Input.label}</label>
        <input {...props.Input} placeholder=''/>
    </section>
  )
}

export default Input