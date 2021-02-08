import Head from "next/head";
import PosterList from "../components/Home/PosterList";
import MetaTags from "../components/meta/MetaTags";
import { MOVIE_TYPE, TV_TYPE } from "../constants/api_constants";

const Home = () => {
  return (
    <div className="mb-10 ml-4 lg:ml-8 mr-1 lg:mr-4">
      <Head>
        <title>ReactFlix</title>
        <MetaTags
          title="ReactFlix"
          description="ReactFlix is a movie library made with ReactJS, Next.js, and TailwindCSS with data from TMDB API."
          URL="https://movies.sanketnaik.dev/"
          imageURL="https://movies.sanketnaik.dev/assets/reactflix-banner.png"
        />
        <link rel="icon" href="https://movies.sanketnaik.dev/favicon.ico" />
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
