import React, { FC, useState, useCallback } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import Info from "../../components/Info";
import styles from "../../styles/Home.module.css";
import Topographic1 from "../../public/Topographic1.svg";
import Image3 from "../../public/image3.jpg";

import watch1 from "../../public/watch1.jpg";
import watch2 from "../../public/watch2.jpg";
import watch3 from "../../public/watch3.jpg";
import watch4 from "../../public/watch4.jpg";
import watch5 from "../../public/watch5.webp";
import watch6 from "../../public/watch6.jpg";
import watch7 from "../../public/watch7.jpg";
import watch8 from "../../public/watch8.jpg";

import phone1 from "../../public/phone1.jpg";
import phone2 from "../../public/phone2.jpg";
import phone3 from "../../public/phone3.jpg";
import phone4 from "../../public/phone4.jpg";
import phone5 from "../../public/phone5.jpg";
import phone6 from "../../public/phone6.jpg";
import phone7 from "../../public/phone7.jpg";
import phone8 from "../../public/phone8.jpg";
import phone9 from "../../public/phone9.jpg";

import repair1 from "../../public/repair1.jpg";
import repair2 from "../../public/repair2.jpg";
import repair3 from "../../public/repair3.jpg";

type Props = {};

const Services = (props: Props) => {
  const watches = [
    watch1,
    watch3,
    watch5,
    watch6,
    watch2,
    watch4,
    watch7,
    watch8,
  ];

  const phones = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5,
    phone6,
    phone7,
    phone8,
    phone9,
  ];

  const Repairs = [repair1, repair2, repair3];
  const ourService = [
    " We are renowned for wholesale and retail sale of mobile phones and accessories",
    "We sell smart wristwatches chromatography watches that can stand the test of time to Nigerians",
    "we repair mobile phone internal components",
    "We sell tech Gadgets that stands out from the rest",
  ];

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
            <h1
              className={`text-white text-[52px] md:text-[90px] font-b-700 ${styles.active} text-center`}
            >
              OUR SERVICES
            </h1>
          </div>
        </div>

        {/* What we do */}
        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[8rem] md:px-[8rem]">
          <div className="flex items-center w-full gap-[3rem] flex-col md:flex-row">
            <Image src={Image3} alt="picture" className="w-[450px]" />
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
                    {ourService.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-likeBlack inline mr-2 mt-2"></div>
                        <span className="text-[18px] leading-[24px]">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wristwatches */}
        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[5rem] md:px-[8rem]">
          <div className="flex items-start justify-start flex-col w-full">
            <h2 className="text-left mb-6 text-[30px] font-b-600">
              Wristwatch Collection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {watches.map((item, index) => (
                <div key={index}>
                  <Image src={item} alt="picture" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[5rem] md:px-[8rem]">
          <div className="flex items-start justify-start flex-col w-full">
            <h2 className="text-left mb-6 text-[30px] font-b-600">
              Phone Collection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {phones.map((item, index) => (
                <div key={index}>
                  <Image src={item} alt="picture" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phone Repairs */}
        <div className="bg-white relative z-[5] w-full flex items-center justify-center px-[2rem] py-[3rem] md:py-[5rem] md:px-[8rem]">
          <div className="flex items-start justify-start flex-col w-full">
            <h2 className="text-left mb-6 text-[30px] font-b-600">
              Phone Repairs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {Repairs.map((item, index) => (
                <div key={index}>
                  <Image src={item} alt="picture" />
                </div>
              ))}
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
