import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

const Card = ({ src }: Props) => {
  return (
    <div className="w-[205px] h-[224px] rounded-[30px] bg-card backdrop-blur-[20px] px-[24px] py-[30px]">
      <div className="flex flex-col">
        <div className="relative h-[100px] bg-lightBlack mb-6">
          <Image
            src={src}
            alt="headphone"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%]"
          />
        </div>
        <div className="flex items-start gap-[4px] flex-col">
          <h3 className="text-[12px] leading-[18px]">
            Beats Solo3 Wireless Headphones
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
