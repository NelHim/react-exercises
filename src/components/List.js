import React from 'react'

const List = ({items}) => {
    let listArray = items.map((item) => {
        if (item === 'dog'){
            return <li key={item}>{`🐶 ${item}`}</li>
        }else if(item === 'cat'){
            return <li key={item}>{`😸 ${item}`}</li>
        }else if (item === 'chicken'){
            return <li key={item}>{`🐔 ${item}`}</li>
        }else if (item === 'cow'){
            return <li key={item}>{`🐮 ${item}`}</li>
        }else if (item === 'sheep'){
            return <li key={item}>{`🐏 ${item}`}</li>
        }else if (item === 'horse'){
            return <li key={item}>{`🐎 ${item}`}</li>
        }
    })
  return (
    <ul>
        {listArray}
    </ul>
  )
}

export default List