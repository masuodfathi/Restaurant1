import React from 'react'

const Button = ({text,classname,type='button',onClick}) => {
  return (
    <button type={type} className={classname} onClick={onClick}>{text}</button>
  )
}

export default Button