import BigPicture from "@/components/home/BigPicture";
import Row from "@/components/home/Row";
import { Movie, MovieOrTvShow } from "@/typings";
import { requests } from "@/utils/requests";
import axios from "axios";

type Props = {
  trendingNow: MovieOrTvShow[];
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
      <div
        className="relative flex h-[70vh] w-full items-end
        pb-10 pl-4 md:h-[90vh]"
      >
        <BigPicture trendingNow={trendingNow} />
      </div>

      <div className="mt-10 space-y-10 pl-2 md:space-y-20 md:pl-5">
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action Thrillers" movies={actionMovies} />
        <Row title="Comedies" movies={comedyMovies} />
        <Row title="Scary Movies" movies={horrorMovies} />
        <Row title="Romance Movies" movies={romanceMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </div>
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
