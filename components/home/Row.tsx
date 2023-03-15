import { Movie } from "@/typings";
import { useRef, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import RowImage from "./RowImage";

function Row({ movies, title }: { movies: Movie[]; title: string }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  function handleClick(direction: "left" | "right") {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? // !+-100 to make sure that every image is displayed fully
            // !instead of half on right, then after scroll half on left
            scrollLeft - clientWidth + 100
          : scrollLeft + clientWidth - 100;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <div className="h-40">
      <h2 className="pl-2 text-xl font-semibold md:text-2xl">{title}</h2>

      <div className="group relative">
        <RiArrowLeftSLine
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 z-40 m-auto h-10 w-10 
          cursor-pointer opacity-0 duration-200 ease-in 
          hover:scale-105 group-hover:opacity-100 ${!isMoved && "hidden"}`}
        />

        <div
          ref={rowRef}
          className="flex space-x-1 overflow-x-scroll p-2
        scrollbar-hide md:space-x-2"
        >
          {movies.map((movie) => (
            <RowImage key={movie.backdrop_path} movie={movie} />
          ))}
        </div>

        <RiArrowRightSLine
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-10 w-10
          cursor-pointer opacity-0 duration-200 ease-in
          hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default Row;
