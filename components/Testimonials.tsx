import React from "react";
import Image from "next/image";

import Topographic5 from "../public/Topographic5.svg";
import Customer from "../public/customer.svg";
import Rating from "../public/Rating.svg";
import RightArrow from "../public/right-arrow.svg";
import LeftArrow from "../public/left-arrow.svg";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="bg-likeBlack w-full h-[450px] text-white flex items-center justify-center flex-col relative overflow-hidden">
      <Image
        src={Topographic5}
        alt="topography"
        className="absolute top-0 right-0"
      />
      <h3 className="uppercase font-b-600 mb-[2rem]">What our customers say</h3>
      <div className="w-[90%] md:w-[450px] md:h-[200px] rounded-[10px] bg-card backdrop-blur-[20px] relative py-[24px] px-[80px] text-black">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Image src={Customer} alt="customer-pic" />
            <div className="flex flex-col items-start">
              <span className="text-[16px]">Natalia Brando</span>
              <Image src={Rating} alt="Rating" />
            </div>
          </div>
          <div className="flex flex-col mb-[12px]">
            <span className="text-[12px]">Product: Acer Swift 3</span>
            <span className="text-[12px]">Date: 23/02/2021</span>
          </div>

          <span className="text-[12px]">
            I really love it! Laptop was delivered in 2 days. I asked to bring
            it to my work. Excellent service
          </span>
          <Image
            src={LeftArrow}
            alt="left-arrow"
            className="absolute left-[20px] top-[45%]"
          />
          <Image
            src={RightArrow}
            alt="left-arrow"
            className="absolute right-[20px] top-[45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
