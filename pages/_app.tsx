import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export const BASE_URL: string = "https://api.themoviedb.org/3/";
export const IMAGE_BASE: string = "https://image.tmdb.org/t/p/w500";
