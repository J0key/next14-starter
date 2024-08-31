// use client digunakan untuk fitur yang memerlukan interaksi dengan user, seperti: logout dkk
'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [isClient, setIsClient] = useState(false)

  // supaya yang di run sama sama dari client
  useEffect(()=> {
    setIsClient(true)
    console.log('sudah dijalankan')

  }, [])
  return (
    <div className="flex my-24 gap-8 justify-between">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          className=""
          alt=""
          src={"/contact.png"}
          width={450}
          height={500}
        />
      </div>

      <div className="w-1/2">
          <form action="" >
            <div className="mb-6">
              <input type="text" placeholder="Name and Surname" className="py-3 px-3 rounded-sm w-full bg-[#2D2B42] border-none focus:border-none focus:outline-none" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Email address" className="py-3 px-3 rounded-sm w-full bg-[#2D2B42] border-none focus:border-none focus:outline-none" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Phone Number(Opsional)" className="py-3 px-3 rounded-sm w-full bg-[#2D2B42] border-none focus:border-none focus:outline-none" />
            </div>
            <div className="mb-6">
              <textarea type="text" placeholder="Message" className="py-3 px-3 h-48 items-start text-start rounded-sm w-full bg-[#2D2B42] border-none focus:border-none focus:outline-none" />
            </div>
            <div className="mb-6">
              <p className="bg-[#3164DD] py-3 px-3 rounded-sm w-full font-semibold text-center cursor-pointer" >Send</p>
            </div>
          </form>
      </div>
    </div>
  );
}
