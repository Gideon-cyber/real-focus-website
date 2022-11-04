import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Real Focus</title>
        <meta name="description" content="Real focus company website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Poppins bg-likeBlack">
        <Hero />
      </main>

      <footer></footer>
    </div>
  );
}
