import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
import Logo from "../public/logo.png";

const Footer = (props: Props) => {
  return (
    <div className="bg-likeBlack py-[30px] px-[20px] md:py-0 md:px-0 md:h-[300px] w-full flex items-center text-white justify-center">
      <div className="flex items-start flex-col md:flex-row justify-evenly w-full gap-6 md:gap-0">
        <Image src={Logo} alt="logo" className="w-[200px] md:w-[300px]" />
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-[18px] leading-[30px] font-b-600 mb-2">LINKS</h4>
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="cursor-pointer">
            About
          </Link>
          <Link href="/services" className="cursor-pointer">
            Our services
          </Link>
          <Link href="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-[18px] leading-[30px] font-b-600 mb-2">
            SOCIAL MEDIA
          </h4>
          <div className="flex items-center gap-3">
            <Image
              src="/Instagram.svg"
              alt="instagram"
              width={18}
              height={18}
            />
            <Image src="/Twitter.svg" alt="twitter" width={18} height={15.71} />
            <Image src="/YouTube.svg" alt="youtube" width={18} height={12.13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
