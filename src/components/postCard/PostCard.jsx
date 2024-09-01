
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Links from './links/Links';

// export default function PostCard({links}) {
//   return (
//     <div>
//         {/* for column */}
//         <div className='mt-10 flex flex-wrap'>
//             {/* for each postCard */}
//             {links.map(link =>(
//             <div key={link.title}>
//                 <div className='flex items-center'>
//                   <Image src={link.path} alt=''  width={300} height={600} />
//                   <span className='-rotate-90'>Nov 04 2023</span>
//                 </div>
//                 <div>
//                   <p>{link.title}</p>
//                   <p>{link.desc}</p>
//                   <Link href={`/blog/${link.slug}`}>Read More</Link>
//                 </div>
//             </div>
//             ))}
//         </div>
//     </div>
//   )
// }


// make API
export default function PostCard({data}) {
    return (
      <div className='w-full md:w-1/3 p-4'>
          {/* for column */}
          <div className='p-4  '>
              {/* for each postCard */}
              <div key={data.title}>
                  <div className='flex items-center  '>
                    <Image className='h-[400px] w-[350px]' src={"https://i.pinimg.com/564x/cb/9c/5f/cb9c5fe7f6f8e88a97aeabfea86a333e.jpg"} alt=''  width={300} height={600} />
                    <span className=' -rotate-90'>2023</span>
                  </div>
                  <div className=''>
                    <p>{data.title}</p>
                    <p>{data.body}</p>
                    <Link href={`/blog/${data.id}`}>Read More</Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
