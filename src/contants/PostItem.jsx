import React from 'react'

export const PostItem = (posts) => {
  return (
    <div className='postItemInform'>
        <div>
            <h2>{posts.id}.{posts.title}</h2>
            <h4>{posts.descrip}</h4>
        </div>
        <button>Delete</button>
    </div>
  )
}
