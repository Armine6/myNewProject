import React from 'react'
import  PostItem  from './PostItem'

 const PostList = ({title, posts, deleteItem}) => {
  console.log(posts);
  return (
    <div className='postListInform'>
      <h2>{title}</h2>
      {posts.map(item => <PostItem id={item.id} title={item.title} descrip={item.descript}  deleteItem ={deleteItem}/>)}
      
    </div>
  )
}

export default PostList