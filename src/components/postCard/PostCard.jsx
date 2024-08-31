
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Links from './links/Links';

export default function PostCard({links}) {
  console.log(links)
  return (
    <div>
        {/* for column */}
        <div className='mt-10 flex flex-wrap'>
            {/* for each postCard */}
            {links.map(link =>(
            <div key={link.title}>
                <div className='flex items-center'>
                  <Image src={link.path} alt=''  width={300} height={600} />
                  <span className='-rotate-90'>Nov 04 2023</span>
                </div>
                <div>
                  <p>{link.title}</p>
                  <p>{link.desc}</p>
                  <Link href={`/blog/${link.slug}`}>Read More</Link>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
