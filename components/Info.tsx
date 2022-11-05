import React from "react";

type Props = {};

const Info = (props: Props) => {
  const infoDetails = [
    { header: "10", text: "Years of experience" },
    { header: "5K", text: "Products" },
    { header: "59", text: "Countries of delivery" },
    { header: "10K", text: "Reviews" },
  ];
  return (
    <div className="bg-white relative z-[102] flex justify-center items-center h-auto py-[100px] md:py-0 md:h-[350px] w-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-center md:items-start gap-[82px] mb-[30px] flex-wrap mx-auto md:mx-0">
          {infoDetails.map((detail, index) => (
            <div className="flex flex-col items-center gap-[20px]" key={index}>
              <span className="text-likeBlack text-[46px] leading-[54px] font-b-600 text-center">
                {detail.header}
              </span>
              <span className="text-likeBlack text-[16px] leading-[24px] font-b-500">
                {detail.text}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="rounded-[40px] h-[46px] w-[158px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-b-500 mx-auto"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Info;
