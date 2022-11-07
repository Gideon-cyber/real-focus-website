import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <header className="flex justify-end items-end max-w-7xl mx-auto relative z-[100]">
      <div>
        <Image
          src="/Union.svg"
          alt="hamburger-button"
          width={20}
          height={14}
          className="md:hidden"
        />
        <ul className="items-center fixed md:relative flex flex-col md:flex-row right-0 top-0 h-screen gap-[24px] bg-white md:bg-white text-[16px] md:h-[19px] w-[200px] md:w-auto md:gap-[32px]">
          <li
            className={router.pathname === "/" ? styles.active : "text-white"}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              router.pathname === "/about" ? styles.active : "text-white"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              router.pathname === "/services" ? styles.active : "text-white"
            }
          >
            <Link href="/services">Our services</Link>
          </li>
          <li
            className={
              router.pathname === "/contact" ? styles.active : "text-white"
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
