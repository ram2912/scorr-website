'use client';
import Hero from "@/components/Hero";
import Related from "@/components/Related";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import GDPRFeature from "@/components/GDPRFeature";
import ValuePropositions from "@/components/ValuePropositions";
import Blog from "@/components/Blog";

const title = "SCORR | Revenue Intelligence";
const description =
  "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.";
const author = "Shriram Pawar";
const keywords =
  "Saas, startup, next.js, react, crypto, wallet, bitcoin, blockchain, landing-page, fin-tech, finance".split(
    ", "
  );
const url = "https://crypto-finance.vercel.app";

export const metadata = {
  title,
  description,
  keywords,
  author,
  themeColor: "#3734A9",
  openGraph: {
    title,
    description,
    url,
    siteName: "SCORR UG",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
  alternates: {
    canonical: url,
    languages: {
      "en-US": url,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
