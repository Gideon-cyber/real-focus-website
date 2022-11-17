import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Testimonials from "../../components/Testimonials";
import styles from "../../styles/Home.module.css";
import Topographic1 from "../../public/Topographic1.svg";
import Image2 from "../../public/image2.jpg";
import Styles from "../../styles/Home.module.css";

type Props = {};

const About = (props: Props) => {
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
          <Image
            src={Topographic1}
            // width={1174.16}
            // height={1160.79}
            alt="topographic picture"
            className="absolute top-[0px] left-[-50px] md:w-[300px] lg:w-[1174.16px]"
          />
          <div className="h-[463px] w-full flex items-center justify-center relative z-[3]">
            <div className="flex flex-col items-center">
              <h1
                className={`text-white text-[52px] md:text-[90px] font-b-700 ${styles.active}`}
              >
                ABOUT US
              </h1>
              <span className="text-white text-[30px] md:text-[40px] font-b-500 text-center">
                Who we are, what we do.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[8rem] md:px-[8rem]">
          <div className="flex items-center w-full gap-[3rem] flex-col md:flex-row">
            <Image src={Image2} alt="picture" className="w-[450px]" />
            <div className="flex items-start flex-col">
              <h2
                className={`text-[40px] leading-[55px] md:text-[65px] md:leading-[75px] font-b-700 mb-[2rem] ${styles.active}`}
              >
                Who we are
              </h2>
              <div className="flex items-start gap-[2rem]">
                <div className="h-[450px] md:h-[350px] border border-likeBlack "></div>
                <div>
                  <span className="mb-[2rem] block">
                    Real Focus Tech global firm is renowned for wholesales and
                    retail mobiles and accessories as well as wristwatches and
                    phone repair gadgets.
                  </span>
                  <span className="mb-[2rem] block">
                    We have been in practice since 2005 and have since provided
                    world-class mobile phone repair services to various clients
                    across Nigeria.
                  </span>
                  <span className="mb-[2rem] block">
                    In addition, we have provided quality phone accessories and
                    wrist watches that can stand the test of time to Nigerians.
                  </span>
                  <span>
                    Integrity, honesty, excellence and customers first are our
                    core values. Give us a trial today!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white relative z-[5] w-full flex items-center justify-center flex-col gap-[1rem] px-[2rem] py-[3rem] md:pb-[8rem] md:px-[8rem]">
          <div
            className="w-[200px] h-[200px] md:h-[400px] md:w-[400px] rounded-full border "
            style={{
              backgroundImage: `url(/ceo.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
          <span
            className={`text-[24px] leading-[34px] md:text-[40px] md:leading-[45px] font-b-600 text-center ${styles.active} shadow-sm`}
          >
            Chief Executive Officer(CEO)
          </span>
        </div>

        <Testimonials />
        <Info />
      </main>

      <Footer />
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
