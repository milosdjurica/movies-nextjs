import BigPicture from "@/components/home/BigPicture";
import { Movie } from "@/typings";
import { IMAGE_BASE_URL } from "@/utils/constants";
import { requests } from "@/utils/requests";
import axios from "axios";
import Image from "next/image";

type Props = {
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
};

export default function Home({
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) {
  return (
    <>
      <BigPicture trendingNow={trendingNow} />
    </>
  );
}

export async function getServerSideProps() {
  const [
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios
      .get(requests.getTrending)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getTopRated)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getActionMovies)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getComedyMovies)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getHorrorMovies)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getRomanceMovies)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
    axios
      .get(requests.getDocumentaries)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  ]);

  return {
    props: {
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
