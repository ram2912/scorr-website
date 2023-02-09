"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";
import { SVGAttributes, useEffect, useRef } from "react";
import Button from "./Button";

export default function Header() {
  const scrollTop = useScrollPosition();
  const isSticky = useRef(false);

  useEffect(() => {
    isSticky.current = scrollTop > innerHeight;
  }, [scrollTop]);

  return (
    <header
      className={`${isSticky.current ? "fixed" : "absolute"} ${
        isSticky.current ? "animate-slide" : ""
      } w-full py-4 ${
        isSticky.current ? "md:py-0" : "md:py-6"
      } bg-primary z-20 whitespace-nowrap`}
    >
      <div className="container flex justify-center md:justify-between items-center">
        <Link
          className="block uppercase text-white font-bold sm:font-bold text-base sm:text-xl"
          href="/"
        >
          Crypto Fin
        </Link>
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-x-6 lg:gap-x-8 text-white text-sm">
            <li>
              <Link href="#">
                Product <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
              </Link>
            </li>
            <li>
              <Link href="#">
                Template{" "}
                <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
              </Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link className="text-white text-sm mr-6 lg:mr-12" href="/sign-in">
            Sign In
          </Link>
          <Button
            href="#"
            bgColor="orange"
            rounded={isSticky.current ? "rounded-0" : "rounded-lg"}
          >
            Start Free
          </Button>
        </div>
      </div>
      <button className="md:hidden absolute right-2 top-3 bg-primary">
        <HamburgerMenu />
      </button>
    </header>
  );
}

const HamburgerMenu = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="38px" height="38px" viewBox="0 0 24 24" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Menu">
        <rect
          id="Rectangle"
          fillRule="nonzero"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <line
          x1="5"
          y1="7"
          x2="19"
          y2="7"
          id="Path"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="17"
          x2="19"
          y2="17"
          id="Path"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          id="Path"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
      </g>
    </g>
  </svg>
);

const ChevronDown = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="0" height="0" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <polygon
      strokeWidth="2"
      stroke="currentColor"
      points="12 20.1 0.1 8.2 2.9 5.3 12 14.4 21.1 5.3 23.9 8.2 12 20.1"
    />
  </svg>
);
