import React from 'react';
import Links from './Links';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex flex-wrap justify-between py-4'>
      <div className='font-bold text-xl'>Lama</div>
      <div>
        <ul className='flex gap-6 font-semibold cursor-pointer items-center'>
          <Links />
          <Link href="" className='bg-white text-black py-2 px-4 rounded-sm'>
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
}
