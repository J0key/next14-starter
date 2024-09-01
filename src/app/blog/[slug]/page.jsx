"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import PostUser from "../../../components/postUser/postUser";
// import {findLinkBySlug} from '../../../data/post'

export default function SinglePost({ params }) {
  // const link = findLinkBySlug(params.slug)
  const router = useRouter();

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [params.slug]);

  if (isLoading) return <p>Loading...</p>;
  if (!post) return <p>No Post Found</p>;

  const handleClick = () => {
    router.back();
  };

  // if(link){
  return (
    <div>
      <button
        onClick={handleClick}
        className="mb-6 px-4 py-2 bg-white text-black font-semibold rounded-md"
      >
        Back
      </button>
      <div className="flex gap-10">
        <div>
          <Image
            className="h-[400px] w-[350px]"
            src={
              "https://i.pinimg.com/564x/cb/9c/5f/cb9c5fe7f6f8e88a97aeabfea86a333e.jpg"
            }
            alt=""
            width={300}
            height={600}
          />
        </div>
        <div className="">
          <h1 className="mb-10">{post.title}</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={params.slug} />
          </Suspense>
          <h1>{post.body}</h1>
        </div>
      </div>
    </div>
  );
  // } else{
  //   return <div>No Post Found</div>
  // }
}
