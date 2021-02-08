import Head from "next/head";
import PosterList from "../components/Home/PosterList";
import { MOVIE_TYPE, TV_TYPE } from "../constants/api_constants";

const Home = () => {
  return (
    <div className="mb-10">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PosterList
        title="Popular Movies"
        endpoint="movie/popular"
        type={MOVIE_TYPE}
      />
      <PosterList
        title="Popular TV Shows"
        endpoint="tv/popular"
        type={TV_TYPE}
      />
      <PosterList
        title="Trending Movies"
        endpoint="trending/movie/week"
        type={MOVIE_TYPE}
      />
      <PosterList
        title="Trending TV Shows"
        endpoint="trending/tv/week"
        type={TV_TYPE}
      />
    </div>
  );
};

export default Home;
