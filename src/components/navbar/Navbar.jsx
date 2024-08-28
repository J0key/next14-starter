import React from 'react';
import Links from './links/Links';

export default function Navbar() {
  return (
    <div className='flex flex-wrap justify-between py-4'>
      <div className='font-bold text-xl'>Lama</div>
      <div>
        <ul className='flex gap-6 font-semibold cursor-pointer items-center'>
          <Links />
        </ul>
      </div>
    </div>
  );
}
