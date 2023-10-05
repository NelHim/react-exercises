import React from 'react'

const Button = () => {

function handleClick () {
    alert('Clicked!');
}

  return (
    <button onClick={handleClick} className="bg-white px-2 py-1 rounded-md">click Me!</button>
  )
}

export default Button