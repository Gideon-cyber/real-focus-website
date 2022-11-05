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
        <ul className="items-center hidden md:flex text-[16px] md:h-[19px] md:gap-[32px]">
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
            <Link href="/">Our services</Link>
          </li>
          <li
            className={
              router.pathname === "/contact" ? styles.active : "text-white"
            }
          >
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
