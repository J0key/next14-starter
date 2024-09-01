"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function PostUser({userId}) {
  const [users, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [userId]);

  if (isLoading) return <p>Loading...</p>;
  if (!users) return <p>No profile data</p>;

  return (
    <div className="flex flex-wrap gap-10">
      <>
        <div className="flex mb-10 gap-3" key={users?.id}>
          <Image
            src={"/noavatar.png"}
            className="rounded-full"
            alt=""
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <p>Author</p>
            <p>{users?.name}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Publisher</p>
          <p>{users?.company.name}</p>
        </div>
      </>
    </div>
  );
}
