import React from "react";

interface Props {
  title: string;
  description: string;
  URL: string;
  imageURL: string;
}

const MetaTags: React.FC<Props> = ({ title, description, URL, imageURL }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageURL}></meta>
    </>
  );
};

export default MetaTags;
