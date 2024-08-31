import React from 'react'
import PostCard from '../../components/postCard/PostCard';
import {links} from '../../data/post'

export default function Blog() {
  console.log(links)
  return (
    <div className='flex flex-wrap '>
      <PostCard links={links}/>
    </div>
    
  )
}
