import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-white w-full text-likeBlack flex items-center justify-center pb-[46px]">
      <div className="flex flex-col px-5 md:px-0">
        <h2 className="text-center font-b-700 text-[36px] leading-[33px] md:text-[55px] md:leading-[59px] mb-[25px]">
          What We Do
        </h2>
        <span className="text-center w-full md:w-[800px] text-[16px]  md:text-[20px] leading-[34px] mb-6">
          Real Focus Tech global firm is renowned for wholesales and retail
          mobiles and accessories as well as wristwatches and phone repair
          gadgets. We have been in practice since 2005 and have since provided
          world-class mobile phone repair services to various clients across
          Nigeria. In addition, we have provided quality phone accessories and
          wrist watches that can stand the test of time to Nigerians.
        </span>
        <button
          type="button"
          className="rounded-[40px] h-[46px] w-[158px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-b-500 mx-auto"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
