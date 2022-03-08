import "../styles/globals.css";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/neemble-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
