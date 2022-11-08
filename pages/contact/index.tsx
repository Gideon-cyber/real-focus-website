import React from "react";
import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Real Focus</title>
        <meta name="description" content="Real focus company website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Poppins bg-likeBlack">
        <div className="py-[30px] px-[30px] md:py-[40px] md:px-[154px] h-[522px] w-full relative">
          <Header />
          <img
            src="/Topographic1.svg"
            // width={1174.16}
            // height={1160.79}
            alt="topographic picture"
            className="absolute top-[0px] left-[-50px] md:w-[300px] lg:w-[1174.16px]"
          />
          <div className="h-[463px] w-full flex items-center justify-center relative z-[103]">
            <h1 className="text-white text-[52px] md:text-[90px] font-b-700">
              CONTACT US
            </h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
