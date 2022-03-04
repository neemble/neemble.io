import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
