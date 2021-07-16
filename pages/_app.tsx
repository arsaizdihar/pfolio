import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextPage } from "next";
const baseUrl = "http://localhost:3000";
const title = "Arsa Izdihar Islam Portfolio";
const description = "Portfolio landed page of Arsa Izdihar Islam.";
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:site_name" content={title} />
        <meta name="og:image" content={baseUrl + "/arsa.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={baseUrl + "/static/img/arsa.jpg"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
