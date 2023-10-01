import React from 'react'

const Button = ({children, position}) => {
function handleClick () {
    alert(`You clicked on ${children}`);
}

  return (
    <button onClick={handleClick} className="bg-[#FEC800] px-2 py-1 rounded-md">{children}</button>
  )
}

export default Button