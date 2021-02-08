import Document, { Html, Head, Main, NextScript } from "next/document";
import MetaTags from "../components/meta/MetaTags";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
