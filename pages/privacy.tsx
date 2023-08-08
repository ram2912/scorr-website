
import Hero from "@/components/Hero";
import Related from "@/components/Related";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import GDPRFeature from "@/components/GDPRFeature";
import ValuePropositions from "@/components/ValuePropositions";
import Blog from "@/components/Blog";
import Imprint from "@/components/Imprint";
import RootLayout from "@/app/layout";
import Privacy from "@/components/privacy";


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

export default function PrivacyPage() {
  return (
    <RootLayout>
    <>
      <Privacy />
    </>
    </RootLayout>
  );
}