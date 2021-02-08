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
