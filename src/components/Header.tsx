"use client";

import { SVGAttributes, useState, Suspense, lazy } from "react";
import Link from "next/link";

import useScrollPosition from "@/hooks/useScrollPosition";
import Button from "./Button";
const HeaderMenu = lazy(() => import("./HeaderMenu"));

export default function Header() {
  const PADDING_Y = 24;
  const [isOpen, setIsOpen] = useState(false);
  const scrollTop = useScrollPosition();
  const isSticky = scrollTop > PADDING_Y;
  const top = Math.max(0, PADDING_Y - scrollTop);

  return (
    <>
      <header
        style={{ top: `calc(${top}px * var(--small))` }}
        className={`fixed [--small:0] md:[--small:1] w-full h-[3.25rem] ${
          isSticky && "bg-gray-200 transition-colors"
        } z-20 whitespace-nowrap ${
          isSticky ? "shadow-[0_8px_20px_rgb(0_54_95_/_30%)]" : ""
        }`}
      >
        <div className="container flex justify-between items-center h-full">
          <Link
            className="block uppercase text-white !font-black text-base sm:text-xl"
            href="/"
          >
            <img src="/Black logo - no background.png" alt="logo" className="h-8" />
          </Link>
          <nav aria-label="primary navigation" className="hidden md:block h-full">
           
          </nav>
      
        </div>
      </header>

     
    </>
  );
}

const HamburgerMenu = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="38px" height="38px" viewBox="0 0 24 24" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Menu">
        <rect fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
        <line
          x1="5"
          y1="7"
          x2="19"
          y2="7"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="17"
          x2="19"
          y2="17"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
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
