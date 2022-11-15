import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://smtpjs.com/v3/smtp.js" />
      <Component {...pageProps} />
    </>
  );
}
