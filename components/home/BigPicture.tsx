import { Movie } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import React from "react";

function BigPicture({ trendingNow }: { trendingNow: Movie[] }) {
  const movie = trendingNow[2];
  return (
    <>
      <div>
        <Image
          src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.original_title || "Image of trending movie"}
          fill
          priority
          className="absolute object-cover top-0 left-0 max-h-[95vh] -z-10 w-screen"
        />
      </div>

      <h1>{}</h1>
    </>
  );
}

export default BigPicture;
