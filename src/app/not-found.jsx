import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>not found</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a.</p>
        <Link href={'/'}>Return Home</Link>
    </div>
  )
}
