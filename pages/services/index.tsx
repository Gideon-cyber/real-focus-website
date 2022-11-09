import React from "react";
import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import Info from "../../components/Info";
import styles from "../../styles/Home.module.css";

type Props = {};

const Services = (props: Props) => {
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
          <div className="h-[463px] w-full flex items-center justify-center relative z-[3]">
            <h1
              className={`text-white text-[52px] md:text-[90px] font-b-700 ${styles.active}`}
            >
              OUR SERVICES
            </h1>
          </div>
        </div>

        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[8rem] md:px-[8rem]">
          <div className="flex items-center w-full gap-[3rem] flex-col md:flex-row">
            <img src="/image3.jpg" alt="picture" className="w-[450px]" />
            <div className="flex items-start flex-col">
              <h2
                className={`text-[40px] leading-[55px] md:text-[65px] md:leading-[75px] font-b-700 mb-[2rem] ${styles.active}`}
              >
                What We Do
              </h2>
              <div className="flex items-center gap-[2rem]">
                <div className="h-[300px] sm:h-[200px] border-[2px] border-likeBlack"></div>
                <div className="">
                  <div className="flex items-start flex-col gap-[1rem]">
                    <div className="flex items-start justify-start">
                      <div className="w-2 h-2 rounded-full bg-likeBlack inline mr-2 mt-2"></div>
                      <span className="text-[18px] leading-[24px]">
                        We are renowned for wholesale and retail sale of mobile
                        phones and accessories
                      </span>
                    </div>

                    <div className="flex items-start justify-start">
                      <div className="w-2 h-2 rounded-full bg-likeBlack inline mr-2 mt-2"></div>
                      <span className="text-[18px] leading-[24px]">
                        We sell smart wristwatches chromatography watches that
                        can stand the test of time to Nigerians
                      </span>
                    </div>

                    <div className="flex items-start justify-start">
                      <div className="w-2 h-2 rounded-full bg-likeBlack inline mr-2 mt-2"></div>
                      <span className="text-[18px] leading-[24px]">
                        We repair mobile phones and gadets
                      </span>
                    </div>

                    <div className="flex items-start justify-start">
                      <div className="w-2 h-2 rounded-full bg-likeBlack inline mr-2 mt-2"></div>
                      <span className="text-[18px] leading-[24px]">
                        We sell tech Gadgets that stands out from the rest
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <Info />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
