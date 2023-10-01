import React from 'react'

const Button = ({incrementCount}) => {
  return (
    <button onClick={incrementCount} className="bg-[#FEC800]  px-2 py-1 rounded-md font-bold">click Me!</button>
  )
}

export default Button