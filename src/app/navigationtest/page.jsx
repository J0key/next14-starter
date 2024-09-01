"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavigationTestPage() {

    const router = useRouter(false)

    const handleClick = () => {
        console.log('clicked')
        // kalo push nanti kalo di back ke halaman tadi
        // router.push('/')

        // kalo replace nanti kalo di back ga ke halaman tadi
        router.replace('/') 

        // varian router hook: replace, back, forward, refresh, push
    }

  return (
    <div>
        <Link href={"/"} prefetch={false}>Click Here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}
