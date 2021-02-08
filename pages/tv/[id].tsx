import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import { BASE_URL, TV_TYPE } from "../../constants/api_constants";
import { TVDetailsResult, TVImages } from "../../types/tv";
import Details from "../../components/Shared/Details";
import Head from "next/head";
import MetaTags from "../../components/meta/MetaTags";

interface Props {
  details: TVDetailsResult;
  images: TVImages;
}

const TVDetails: React.FC<Props> = ({ details, images }) => {
  return (
    <>
      <Head>
        <MetaTags
          title={details.name}
          description={details.overview}
          URL={`https://movies.sanketnaik.dev/tv/${details.id}`}
          imageURL={details.backdrop_path}
        />
        <link rel="icon" href="https://movies.sanketnaik.dev/favicon.ico" />
      </Head>
      <Details
        name={details.name}
        posterPath={details.poster_path}
        genres={details.genres}
        overview={details.overview}
        tagline={details.tagline}
        backdropPath={details.backdrop_path}
        backdrops={images.backdrops}
        similarTitle="Similar TV Shows"
        similarEndpoint={`tv/${details.id}/similar`}
        similarType={TV_TYPE}
      >
        <div className="grid grid-cols-2 text-center mt-4">
          <div className="text-lg sm:text-xl font-bold font-heading text-gray-800 dark:text-gray-200">
            Rating
          </div>
          <div className="text-lg sm:text-xl font-bold font-heading text-gray-800 dark:text-gray-200">
            Seasons
          </div>
          <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-12 border-t-2 border-gray-400 dark:border-gray-700">
            {details.vote_average}/10
          </div>
          <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-12 border-t-2 border-gray-400 dark:border-gray-700">
            {details.number_of_seasons}
          </div>
        </div>
      </Details>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const details: AxiosResponse<TVDetailsResult> = await axios.get<TVDetailsResult>(
    `${BASE_URL}tv/${context.params.id}`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        language: "en-US",
      },
    }
  );
  const images: AxiosResponse<TVImages> = await axios.get<TVImages>(
    `${BASE_URL}tv/${context.params.id}/images`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );
  return { props: { details: details.data, images: images.data } };
};

export default TVDetails;
