import React from "react";

interface Props {
  title: string;
}

const ErrorCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="px-5 py-10 md:p-10 rounded-xl bg-red-200 bg-opacity-70 text-red-600 dark:bg-red-500 dark:text-gray-200 flex flex-col font-heading justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="mt-3 text-md md:text-lg text-center">
        Unable to get <span className="lowercase">{title}</span> data. Please
        make sure that you are connected to the internet.
      </span>
    </div>
  );
};

export default ErrorCard;
