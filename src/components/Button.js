import React from 'react'

const Button = ({display, className}) => {
  return (
    <button className={className}>{display}</button>
  )
}

export default Button