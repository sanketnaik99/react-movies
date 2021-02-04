import React from "react";

const LoadingPoster = () => {
  return (
    <div className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 dark:bg-gray-700 dark:text-gray-500 rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-12 h-20 animate-pulse"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    </div>
  );
};

export default LoadingPoster;
