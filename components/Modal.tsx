import { modalState, movieState } from "@/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player/lazy";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [muted, setMuted] = useState(false);

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
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-[100] flex h-8 
          w-8 items-center justify-center rounded-full bg-black"
        >
          <AiOutlineClose className="text-lg" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            className="absolute top-0 left-0 "
            playing
            muted={muted}
          />
          <div>
            
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
