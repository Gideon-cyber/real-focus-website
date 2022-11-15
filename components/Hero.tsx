import React from "react";
import Header from "./Header";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Topographic1 from "../public/Topographic1.svg";
import Laptop from "../public/Laptop.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-[30px] px-[30px] md:py-[40px] md:px-[154px] h-[522px] w-full relative animate-ChangeBg sm:bg-cover bg-center">
      <Header />
      {/* <Image
        src={Topographic1}
        // width={1174.16}
        // height={1160.79}
        alt="topographic picture"
        className="absolute top-[0px] left-[-50px] md:w-[300px] lg:w-[1174.16px]"
      /> */}
      {/* <div className="h-[463px] w-full flex items-center relative">
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
        <Image
          src={Laptop}
          alt="laptop pic"
          // width={716}
          // height={427}
          // sizes="320 640 750"
          // layout="responsive"
          className="absolute md:right-[-130px] md:bottom-[-100px] bottom-[-100px] w-[300px] left-[1/2] md:w-[716px] md:h-[427px] z-[4]"
        />
      </div> */}
    </div>
  );
};

export default Hero;
