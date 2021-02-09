import React, { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

const LazyImage: React.FC<Props> = ({ src, alt }) => {
  const [hasLoaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    console.log("loaded");
    setLoaded(true);
  };

  const imageStyle = !hasLoaded ? { display: "none" } : {};

  return (
    <>
      {!hasLoaded && (
        <div className="h-full w-full flex flex-col bg-gray-200 items-center justify-center text-gray-400 dark:bg-gray-700 dark:text-gray-500 ">
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
      )}
      <img src={src} alt={alt} style={imageStyle} onLoad={handleImageLoaded} />
    </>
  );
};

export default LazyImage;
