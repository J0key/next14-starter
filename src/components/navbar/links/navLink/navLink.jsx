import Link from 'next/link';
import React from 'react';

export default function navLink({ item, className }) {
  return (
    <div>
      <Link href={item.path}>
        <a className={className}>{item.title}</a>
      </Link>
    </div>
  );
}
