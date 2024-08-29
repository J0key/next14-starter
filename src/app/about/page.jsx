import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='flex my-24 gap-8 justify-between'>
      <div className='w-1/2'>
        <p className='text-secondary text-2xl font-bold mb-10' >About Agency</p>
        <h1 className='text-6xl font-semibold mb-10 '>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className='text-md mb-10'>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precision. Were worlds Our Special Team best consulting & finance solution provider. Wide range of web and software development services </p>
        <div className='flex gap-5  justify-between'>
          <div className='flex flex-col'>
            <p className='text-secondary font-bold text-2xl'>10 K+</p>
            <p>Year of experience</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-secondary font-bold text-2xl'>234 K+</p>
            <p>People reached</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-secondary font-bold text-2xl'>5 K+</p>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
      <Image className='' alt="" src={'/about.png'} width={450} height={450}/>
      </div>
    </div>
  )
}
