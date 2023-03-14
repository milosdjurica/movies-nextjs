import { Movie } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";

function RowImage({ movie }: { movie: Movie }) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer
    duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_title}
        fill
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
}

export default RowImage;
