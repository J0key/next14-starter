"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ImageCard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/search?limit=1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((anime) => (
        <div key={anime.id} className="flex flex-col items-center">
          <Image
            className="h-[400px] w-[350px]"
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            width={300}
            height={450}
          />
          <p>{anime.name}</p>
        </div>
      ))}
    </div>
  );
}
