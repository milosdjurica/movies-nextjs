import { modalState, movieState } from "@/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player/lazy";

type Genre = {
  id: number;
  name: string;
};

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      // !!append_to_response give a video for a specific movie
      const url = `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${movie?.id}?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&append_to_response=videos`;

      const data = await axios
        .get(url)
        .then((res) => res.data)
        .catch((error) => console.log(error));

      try {
        if (data?.videos) {
          const index = data.videos.results.findIndex(
            (el: { type: string }) => el.type === "Trailer"
          );
          setTrailer(data.videos.results[index].key);
        }
        if (data?.genres) {
          setGenres(data.genres);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movie]);

  function handleClose() {
    setShowModal(false);
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="relative mx-auto max-w-[800px]"
    >
      <>
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-[100] flex h-8 
          w-8 items-center justify-center rounded-full bg-gray-800"
        >
          <AiOutlineClose className="text-lg" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            className="absolute top-0 left-0 "
            controls={true}
          />
        </div>
        <div
          className="space-y-2 bg-gray-900 p-5 
        font-semibold text-white md:text-lg"
        >
          <div className="flex items-center justify-between">
            <p
              className={
                movie
                  ? movie.vote_average > 7
                    ? "text-green-500"
                    : movie.vote_average < 5
                    ? "text-red-500"
                    : "text-yellow-600"
                  : ""
              }
            >
              Rating : {movie?.vote_average.toFixed(1)}
            </p>
            <p>Released: {movie?.release_date || movie?.first_air_date}</p>
          </div>
          <p className="text-md w-5/6">{movie?.overview}</p>
          <p className="font-normal">Genres: {genres.map((el) => el.name).join(", ")}</p>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
