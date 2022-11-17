import React, { useState } from "react";
import Image from "next/image";

import Topographic5 from "../public/Topographic5.svg";
import Customer from "../public/customer.svg";
import Rating from "../public/Rating.svg";
import RightArrow from "../public/right-arrow.svg";
import LeftArrow from "../public/left-arrow.svg";

type Props = {};

interface detail {
  image: string;
  name: string;
  product: string;
  date: string;
  review: string;
}

const Testimonials = (props: Props) => {
  const [index, setIndex] = useState(0);
  const details: detail[] = [
    {
      image: "/testimonial1.jpg",
      name: "Natalia Brando",
      product: "Product: Acer Swift 3",
      date: "Date: 23/02/2021",
      review:
        "I really love it! Laptop was delivered in 2 days. I asked to bring it to my work. Excellent service",
    },
    {
      image: "/testimonial3.jpg",
      name: "Uzochukwuka Obu",
      product: "Product: Oraimo earphone",
      date: "Date: 23/02/2021",
      review:
        "I really love it! Earphone was delivered in a day. Excellent service",
    },
    {
      image: "/testimonial2.jpg",
      name: "Jessica Okonkwo",
      product: "Product: Smart Wristwatch",
      date: "Date: 23/02/2021",
      review:
        "I really love it! Wristwatch was delivered in 2 days. The product was in very good condition. Excellent service",
    },
  ];
  function loop(count: number) {
    if (count === details.length) {
      return (count = 0);
    } else if (count < 0) {
      return (count = details.length - 1);
    }
    return count;
  }

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
            {/* <Image
              src={details[index].image}
              alt="customer-pic"
              className="h-[40px] rounded-[140px]"
            /> */}
            <div
              className="h-[40px] w-[40px] rounded-full"
              style={{
                backgroundImage: `url(${details[index].image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex flex-col items-start">
              <span className="text-[16px]">{details[index].name}</span>
              <Image src={Rating} alt="Rating" />
            </div>
          </div>
          <div className="flex flex-col mb-[12px]">
            <span className="text-[12px]">{details[index].product}</span>
            <span className="text-[12px]">{details[index].date}</span>
          </div>

          <span className="text-[12px]">{details[index].review}</span>
          <Image
            src={LeftArrow}
            alt="left-arrow"
            className="absolute left-[20px] top-[45%] cursor-pointer"
            onClick={() => setIndex((count) => loop(count - 1))}
          />
          <Image
            src={RightArrow}
            alt="left-arrow"
            className="absolute right-[20px] top-[45%] cursor-pointer"
            onClick={() => setIndex((count) => loop(count + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
