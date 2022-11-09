import React from "react";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="bg-likeBlack w-full h-[450px] text-white flex items-center justify-center relative overflow-hidden">
      <img
        src="/Topographic5.svg"
        alt="topography"
        className="absolute top-0 right-0"
      />
      <h3 className="uppercase font-b-600">What our customers say</h3>
    </div>
  );
};

export default Testimonials;
