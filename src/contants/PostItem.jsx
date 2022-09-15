import React from 'react'
import MyButton from './UI/button/MyButton'

 const PostItem = ({posts,id,title,descrip,deleteItem}) => {
  return (
    <div className='postItemInform'>
        <div>
            <h2>{posts.id}.{posts.title}</h2>
            <h4>{posts.descrip}</h4>
        </div>
        <MyButton onClick={deleteItem(posts.id)}>Delete</MyButton>
    </div>
  )
}
export default PostItem