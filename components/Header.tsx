import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-end items-end max-w-7xl mx-auto relative z-[100]">
      <div>
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`md:hidden relative z-[9999] ${
            open ? "fill-likeBlack" : "fill-[#F7F7F7]"
          }`}
          onClick={() => setOpen(!open)}
        >
          <path
            d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0H1ZM1 4C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H1ZM0 9C0 8.44771 0.447715 8 1 8H19C19.5523 8 20 8.44771 20 9C20 9.55229 19.5523 10 19 10H1C0.447715 10 0 9.55229 0 9ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H19C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12H1Z"
            // fill="#F7F7F7"
          />
        </svg>

        <ul
          className={`items-center fixed md:relative flex flex-col md:flex-row top-0 bottom-0 h-screen gap-[24px] bg-white md:bg-transparent text-[16px] md:h-[19px] w-[200px] md:w-auto md:gap-[32px] z-[999] pt-[4rem] md:pt-0 transition-all ${
            open ? "right-0" : "right-[-200px] md:right-0"
          }`}
        >
          <li
            className={
              router.pathname === "/"
                ? styles.active
                : "text-likeBlack md:text-white"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              router.pathname === "/about"
                ? styles.active
                : "text-likeBlack md:text-white"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              router.pathname === "/services"
                ? styles.active
                : "text-likeBlack md:text-white"
            }
          >
            <Link href="/services">Our services</Link>
          </li>
          <li
            className={
              router.pathname === "/contact"
                ? styles.active
                : "text-likeBlack md:text-white"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
