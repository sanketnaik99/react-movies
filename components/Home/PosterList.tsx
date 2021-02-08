import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BASE_URL, THUMB_IMAGE_BASE } from "../../constants/api_constants";
import { TVResult, TVShow } from "../../types/tv";
import { Movie, MovieResult } from "../../types/movie";
import ErrorCard from "../Shared/ErrorCard";
import LoadingPoster from "../Shared/LoadingPoster";

interface Props {
  title: string;
  endpoint: string;
  type: string;
}

const PosterList: React.FC<Props> = ({ title, endpoint, type }) => {
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
        setList(res.data.results);
        setLoadingList(false);
      })
      .catch((err) => {
        console.error(err);
        setList(null);
        setLoadingList(false);
      });
  }, []);

  // Display Loading Poster if -> isLoadingList === true
  // Display Posters if -> isLoadingList === false && list !== null
  // Else -> Display ErrorCard
  const posterList = isLoadingList ? (
    Array(20)
      .fill(0)
      .map((_, index) => <LoadingPoster key={index} />)
  ) : list ? (
    list.map((item) => (
      <Link href={`${type}/${item.id}`} key={item.id}>
        <div className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 cursor-pointer rounded-xl overflow-hidden">
          {item.poster_path ? (
            <img
              src={`${THUMB_IMAGE_BASE}${item.poster_path}`}
              alt={item.title}
            />
          ) : (
            <div className="flex h-full w-full flex-row items-center justify-center text-gray-200 bg-gradient-to-br from-reactflix-start to-reactflix-end text-center font-heading font-bold text-xl px-2">
              {item.title || item["name"]}
            </div>
          )}
        </div>
      </Link>
    ))
  ) : (
    <ErrorCard title={title} />
  );

  return (
    <>
      <h1 className="text-3xl font-heading font-extrabold mt-2 md:mt-8">
        {list.length > 0 ? title : ""}
      </h1>
      <div className="grid grid-flow-col gap-2 overflow-x-auto mt-3 pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-300">
        {posterList}
      </div>
    </>
  );
};

export default PosterList;
