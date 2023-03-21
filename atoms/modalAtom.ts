import { Movie, MovieOrTvShow } from "@/typings";
import { atom } from "recoil";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const movieState = atom<MovieOrTvShow | Movie | null>({
  key: "movieState",
  default: null,
});
