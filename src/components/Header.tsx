"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FC } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button";
import Image from "next/image";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const ThemeToggle = dynamic(
    () => {
      return import("./ThemeToggle");
    },
    { ssr: false }
  );
  return (
    <header className="fixed flex justify-center w-full  border-neutral-300 border-b backdrop-blur-lg dark:border-neutral-600 bg-opacity-25 shadow-sm  z-30">
      <div className="container max-w-4xl flex py-1 justify-between items-center gap-3">
        <Link className="" href="https://bmrd.dev/">
          <Button>
            <Image
              alt="webpage"
              src="/images/favicon.ico"
              width={14}
              height={14}
            ></Image>
            Portfolio <HiOutlineExternalLink />{" "}
          </Button>
        </Link>

        <Link href={"/"}>
          <Button className="gap-0">
            <span className="dark:text-yellow-300 font-semibold text-slate-900">
              brmd
            </span>
            blog
          </Button>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
