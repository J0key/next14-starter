"use client"

import { useState, useEffect } from 'react'
import PostCard from '../../components/postCard/PostCard';
// import {links} from '../../data/post'

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   if(!res.ok){
//     throw new Error(`Error fetching data: ${res.status}`)
//   }
//   return res.json()
// }


export default function Blog() {
  // console.log(links)
  const [datas, setData] = useState(null)
  // const [images, setImg] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`https://shikimori.one/api/animes/1`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

 
  if (isLoading) return <p>Loading...</p>
  if (!datas) return <p>No profile data</p>

 

  return (
    <div className='flex flex-wrap'>
      {datas.map((data)=> (
        <PostCard key={data.id} data={data} /> 
      ))}
      {/* <PostCard links={links}/> */}
    </div>
    
  )
}
