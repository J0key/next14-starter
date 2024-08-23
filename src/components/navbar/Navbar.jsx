import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex flex-wrap justify-between py-4 '>
        <div className='font-bold text-xl'>Lama</div>
        <div>
            <ul className='flex gap-6 font-semibold cursor-pointer'>
                <Link href={""}  className='hover:bg-white hover:text-black py-2 px-4 rounded-full'>Homepage</Link>
                <Link href={""}  className='hover:bg-white hover:text-black py-2 px-4 rounded-full'>About</Link>
                <Link href={""}  className='hover:bg-white hover:text-black py-2 px-4 rounded-full'>Contact</Link>
                <Link href={""}  className='hover:bg-white hover:text-black py-2 px-4 rounded-full'>Blog</Link>
                <Link href={""}  className='hover:bg-white hover:text-black py-2 px-4 rounded-full'>Admin</Link>
                <Link href={""}  className='bg-white text-black py-2 px-4 rounded-sm'>Logout</Link>
            </ul>
        </div>

    </div>
  )
}
