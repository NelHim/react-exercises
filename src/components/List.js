import React from 'react'

const List = ({items}) => {
    let listArray = items.map((item) => {
        if (item === 'dog'){
            return <li className='border border-gray-400 py-4 px-6' key={item}>{`🐶 ${item}`}</li>
        }else if(item === 'cat'){
            return <li className='border border-gray-400 py-4 px-6' key={item}>{`😸 ${item}`}</li>
        }else if (item === 'chicken'){
            return <li className='border border-gray-400 py-4 px-6' key={item}>{`🐔 ${item}`}</li>
        }else if (item === 'cow'){
            return <li className='border border-gray-400 py-4 px-6' key={item}>{`🐮 ${item}`}</li>
        }else if (item === 'sheep'){
            return <li className='border border-gray-400 py-4 px-6' key={item}>{`🐏 ${item}`}</li>
        }
        return <li className='border border-gray-400 py-4 px-6' key={item}>{`🐎 ${item}`}</li>
    })
  return (
    <ul>
        {listArray}
    </ul>
  )
}

export default List