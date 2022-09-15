import React from 'react'
import  PostItem  from './PostItem'

 const PostList = ({title, posts, deleteItem}) => {
  return (
    <div className='postListInform'>
      <h2>{title}</h2>
      {posts.map(item => <PostItem key={item.id} id={item.id} title={item.title} descrip={item.descript}  deleteItem ={deleteItem}/>)}
      
    </div>
  )
}

export default PostList