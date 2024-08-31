import Image from "next/image";
import React from "react";
import {findLinkBySlug} from '../../../data/post'



export default function SinglePost({params}) {
  console.log(params.slug)

  const link = findLinkBySlug(params.slug)
  console.log(link)
  if(link){
    return (
      <div className="flex gap-10">
        <div>
          <Image src={link.path} alt="" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="mb-10">{link.title}</h1>
          <div className="flex flex-wrap gap-10">
            <div className="flex mb-10 gap-3">
              <Image src={'/noavatar.png'} className="rounded-full" alt="" width={50} height={50} />
              <div className="flex flex-col">
                <p>Author</p>
                <p>Tony Setiawan</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Publisher</p>
              <p>-108893979800</p>
            </div>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam,
            recusandae ex sequi asperiores saepe dolorem itaque perspiciatis
            numquam harum.
          </h1>
        </div>
      </div>
    );
  } else{
    return <div>No Post Found</div>
  }
}
