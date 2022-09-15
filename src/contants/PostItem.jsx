import React from 'react'
import MyButton from './UI/button/MyButton'

 const PostItem = ({id,title,descrip,deleteItem}) => {
  return (
    <div className='postItemInform'>
        <div>
            <h2>{id}.{title}</h2>
            <h4>{descrip}</h4>
        </div>
        <MyButton onClick={() => deleteItem(id)}>Delete</MyButton>
    </div>
  )
}
export default PostItem