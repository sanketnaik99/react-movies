import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, IMAGE_BASE } from "../../pages/_app";
import { Movie, MovieResult, TVShow, TVResult } from "../../types/types";
import ErrorCard from "../Shared/ErrorCard";
import LoadingPoster from "../Shared/LoadingPoster";

interface Props {
  title: string;
  endpoint: string;
}

const PosterList: React.FC<Props> = ({ title, endpoint }) => {
  // Popular Movies State
  const [isLoadingList, setLoadingList] = useState(true);
  const [list, setList] = useState<Movie[] & TVShow[]>([]);

  // Get Popular Movies List
  useEffect(() => {
    axios
      .get<MovieResult & TVResult>(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          language: "en-US",
          page: 1,
        },
      })
      .then((res) => {
        console.log(res);
        setList(res.data.results);
        setLoadingList(false);
      })
      .catch((err) => {
        console.error(err);
        setList(null);
        setLoadingList(false);
      });
  }, []);

  const posterList = isLoadingList ? (
    Array(20)
      .fill(0)
      .map((_, index) => <LoadingPoster key={index} />)
  ) : list ? (
    list.map((item) => (
      <div
        key={item.id}
        className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 cursor-pointer rounded-xl overflow-hidden"
      >
        <img src={`${IMAGE_BASE}${item.poster_path}`} alt={item.title} />
      </div>
    ))
  ) : (
    <ErrorCard title={title} />
  );

  return (
    <>
      <h1 className="ml-4 lg:ml-8 text-3xl font-heading font-extrabold mt-2 md:mt-8">
        {title}
      </h1>
      <div className="grid grid-flow-col gap-2 overflow-x-auto ml-4 mr-1 lg:ml-8 lg:mr-8 mt-3 pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-300">
        {posterList}
      </div>
    </>
  );
};

export default PosterList;
