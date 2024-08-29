import Image from "next/image"
import React from 'react'
export default function Home() {
  return(
    <div className='flex my-24 gap-8 justify-between'>
      <div className='w-1/2'>
        <h1 className='text-7xl font-semibold mb-10'>Creative <span className="block">Thoughts</span> Agency,</h1>
        <p className='text-md mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut consectetur nemo vitae mollitia error facere nobis maiores ipsum molestias.</p>
        <div className='flex gap-5 mb-6'>
          <div className='flex flex-col px-4 py-3 rounded-sm bg-[#3065DC] font-semibold'>
            <p>Learn More</p>
          </div>
          <div className='flex flex-col px-6 py-3 rounded-sm bg-[#ffffff] text-black font-semibold'>
            <p>Contact</p>
          </div>
        </div>
        <Image alt="" className="grayscale" src={'/brands.png'} width={500} height={300} />
      </div>
      <div className='w-1/2 flex justify-center'>
      <Image className='' alt="" src={'/hero.gif'} width={450} height={450}/>
      </div>
    </div>
  )
}
