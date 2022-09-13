import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({title,posts}) => {
  return (
    <div className='postListInform'>
      <h2>{title}</h2>
      {posts.map(item => <PostItem id={item.id} title={item.title} descrip={item.descript}/>)}
      
    </div>
  )
}
