import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white  md:pt-0  ">
   
      <section className="container py-20 flex flex-col lg:flex-row text-center justify-between">
        <p className="text-xs tracking-wide">
          <img src="/White logo - no background copy.png" alt="logo" className="h-8" style={{marginBottom:'15px'}} />
          &copy; {new Date().getFullYear()} SCORR UG. All rights reserved.
          &mdash;{" "}
          <Link href="/imprint" className="hover:underline">
            Imprint
          </Link>{" "}
          &bull;{" "}
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      
      </section>
    </footer>
  );
}
