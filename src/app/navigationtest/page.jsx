"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavigationTestPage() {


    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get('q')

    console.log(q)

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
