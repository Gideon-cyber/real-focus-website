import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import Info from "../components/Info";

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
        <Info />
        <About />
      </main>

      <footer></footer>
    </div>
  );
}
