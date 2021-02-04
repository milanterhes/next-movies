import Head from "next/head";
import Header from "@/components/header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wookie Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
    </>
  );
}
