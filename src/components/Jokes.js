// import { render } from '@testing-library/react'
import React from 'react'

const Jokes = () => {

    let jsonArr = [
        {
          id: 1,
          setup: "What's the best thing about a Boolean?",
          punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
          id: 2,
          setup: "Why do programmers wear glasses?",
          punchline: "Because they need to C#"
        }
      ]

    let realJokes = jsonArr.map(joke => {
              return  <div className='py-14 px-10 bg-white text-center border shadow-xl rounded-lg w-[450px]'>
                        <h1 className='font-bold text-2xl'>{joke.setup}</h1>
                        <h3 className='text-lg'>{joke.punchline}</h3>
                     </div>
    })

  return (
    <div className='flex gap-5 bg-[#E1F8DB] p-5'>
        {realJokes}
    </div>
    
  )
}

export default Jokes