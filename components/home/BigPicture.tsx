import { MovieOrTvShow } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import { BsInfoCircle } from "react-icons/bs";

function BigPicture({ trendingNow }: { trendingNow: MovieOrTvShow[] }) {
  const [movie, setMovie] = useState<MovieOrTvShow | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)]);
  }, []);

  if (!movie) return <Loading />;

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {console.log(movie)}
      <Image
        src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={
          movie.title ||
          movie.original_title ||
          movie.name ||
          movie.original_name ||
          "Image of trending movie"
        }
        fill
        priority
        className="-z-10 object-cover"
      />

      <div className="absolute space-y-3 md:w-[80%] md:pl-10">
        <h1 className="text-4xl md:text-7xl">
          {movie.title ||
            movie.original_title ||
            movie.name ||
            movie.original_name}
        </h1>
        <h6>Type: {movie.media_type === "movie" ? "Movie" : "Tv Show"}</h6>
        <h6>Release date: {movie.release_date || movie.first_air_date}</h6>
        <button
          onClick={handleModal}
          className="flex items-center justify-between 
          space-x-3 rounded bg-gray-400 
          px-4 py-2 font-bold
          duration-200 ease-in hover:opacity-70"
        >
          <BsInfoCircle className="text-xl" />
          <p>See more</p>
        </button>
      </div>
    </>
  );
}

export default BigPicture;
