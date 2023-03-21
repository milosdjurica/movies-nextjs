import { modalState, movieState } from "@/atoms/modalAtom";
import { Movie } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import { useRecoilState } from "recoil";

function RowImage({ movie }: { movie: Movie }) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [modalMovie, setModalMovie] = useRecoilState(movieState);

  function handleModal() {
    setShowModal(true);
    setModalMovie(movie);
  }

  return (
    <div
      onClick={handleModal}
      className="relative h-28 min-w-[180px] cursor-pointer
    duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_title}
        fill
        sizes="h-28 min-w-[180px] md:h-36 md:min-w-[260px]"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
}

export default RowImage;
