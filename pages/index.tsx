import Head from "next/head";
import PosterList from "../components/Home/PosterList";

const Home = () => {
  return (
    <div className="mb-10">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PosterList title="Popular Movies" endpoint="movie/popular" />
      <PosterList title="Popular TV Shows" endpoint="tv/popular" />
      <PosterList title="Trending Movies" endpoint="trending/movie/week" />
      <PosterList title="Trending TV Shows" endpoint="trending/tv/week" />
    </div>
  );
};

export default Home;
