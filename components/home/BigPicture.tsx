import { MovieOrTvShow } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import { BsInfoCircle, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtom";

function BigPicture({ trendingNow }: { trendingNow: MovieOrTvShow[] }) {
  const [movie, setMovie] = useState<MovieOrTvShow | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [modalMovie, setModalMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)]);
  }, []);

  if (!movie) return <Loading />;

  function handleModal() {
    setShowModal(true);
    setModalMovie(movie);
  }

  return (
    <>
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

      <div className="absolute space-y-4 font-semibold md:w-[80%] md:pl-10">
        <h1 className="text-4xl md:text-7xl">
          {movie.title ||
            movie.original_title ||
            movie.name ||
            movie.original_name}
        </h1>
        <div className="flex space-x-5 pl-1">
          <h6 className="text-lg">
            Type: {movie.media_type === "movie" ? "Movie" : "Tv Show"}
          </h6>
          <h6 className="text-lg">
            Release date: {movie.release_date || movie.first_air_date}
          </h6>
        </div>
        <div className="flex space-x-5">
          <button
            className="flex items-center justify-center 
          rounded bg-white px-3 font-semibold text-black
          duration-200 ease-in hover:scale-105"
          >
            <BsFillPlayFill className="text-4xl" />
            <p>Play</p>
          </button>

          <button
            onClick={handleModal}
            className="flex items-center justify-between 
          space-x-3 rounded bg-gray-400 
          px-4 py-2
          duration-200 ease-in hover:opacity-70"
          >
            <BsInfoCircle className="text-xl" />
            <p>See more</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default BigPicture;
