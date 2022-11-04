import React from "react";
import Header from "./Header";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="md:py-[40px] md:px-[154px] md:h-[572px] relative overflow-hidden">
      <Header />
      <Image
        src="/Topographic1.svg"
        width={1174.16}
        height={1160.79}
        alt="topographic picture"
        className="absolute top-[0px] left-[-50px]"
      />
      <h1>The next level of smart gadgets</h1>
    </div>
  );
};

export default Hero;
