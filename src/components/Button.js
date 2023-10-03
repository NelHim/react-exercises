import React from 'react'

const Button = ({display, className, updateState}) => {
  return (
    <button className={className} onClick={() => updateState(display)}>{display}</button>
  )
}

export default Button