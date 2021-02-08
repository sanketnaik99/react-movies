import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import Details from "../../components/Shared/Details";
import { BASE_URL } from "../../constants/api_constants";
import { MovieDetailsResult, MovieImages } from "../../types/movie";

interface Props {
  details: MovieDetailsResult;
  images: MovieImages;
}

const MovieDetails: React.FC<Props> = ({ details, images }) => {
  return (
    <Details
      name={details.title}
      posterPath={details.poster_path}
      genres={details.genres}
      overview={details.overview}
      tagline={details.tagline}
      backdropPath={details.backdrop_path}
      backdrops={images.backdrops}
    >
      <div className="grid grid-cols-2 text-center mt-4">
        <div className="text-lg sm:text-xl font-bold font-heading text-gray-800 dark:text-gray-200">
          Rating
        </div>
        <div className="text-lg sm:text-xl font-bold font-heading text-gray-800 dark:text-gray-200">
          Status
        </div>
        <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-12 border-t border-gray-600 dark:border-gray-500">
          {details.vote_average}/10
        </div>
        <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-12 border-t border-gray-600 dark:border-gray-500">
          {details.status}
        </div>
      </div>
    </Details>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const details: AxiosResponse<MovieDetailsResult> = await axios.get<MovieDetailsResult>(
    `${BASE_URL}movie/${context.params.id}`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        language: "en-US",
      },
    }
  );
  const images: AxiosResponse<MovieImages> = await axios.get<MovieImages>(
    `${BASE_URL}movie/${context.params.id}/images`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );
  return { props: { details: details.data, images: images.data } };
};

export default MovieDetails;
