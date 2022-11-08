import React from "react";
import Header from "./Header";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-[30px] px-[30px] md:py-[40px] md:px-[154px] h-[522px] w-full relative">
      <Header />
      <img
        src="/Topographic1.svg"
        // width={1174.16}
        // height={1160.79}
        alt="topographic picture"
        className="absolute top-[0px] left-[-50px] md:w-[300px] lg:w-[1174.16px]"
      />
      <div className="h-[463px] w-full flex items-center relative">
        <div className="flex flex-col items-start w-full">
          <h1
            className={`${styles.active} text-[30px] text-center md:text-left md:text-[54px] md:leading-[56px] capitalize md:w-[616px] font-b-600 mb-4 mx-auto md:mx-0`}
          >
            THE NEXT LEVEL OF SMART GADGETS
          </h1>
          <span className="w-[250px] mx-auto md:mx-0 md:w-[639px] text-white md:text-[22px] md: leading-[38px] text-center md:text-left">
            A large collection of the best gadgets of global
            <br /> brands in one place for you
          </span>
        </div>
        <img
          src="/Laptop.svg"
          alt="laptop pic"
          // width={716}
          // height={427}
          // sizes="320 640 750"
          // layout="responsive"
          className="absolute md:right-[-130px] md:bottom-[-100px] bottom-[-200px] w-[716px] h-[427px] z-[4]"
        />
      </div>
    </div>
  );
};

export default Hero;
