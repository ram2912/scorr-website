import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import BannerImage from "./BannerImage";
import WorkEmailInput from "./EmailForm";
import axios from "axios";

interface WorkEmailInputProps {
  onSubmit: (email: string) => void;
}



export default function Privacy() {
 

  return (
    <>
    <section className="relative pb-28 sm:pb-48 md:pb-56 xl:pb-50 max-h-[102rem] overflow-hidden" >
        <div className="pointer-events-none full-size  -z-[1]"></div>
        <div
          className={[
            "pointer-events-none full-size -z-[1]",
            "opacity-70 md:opacity-100",
           
          ].join(" ")}
        >
          <div className="full-size top-0 hidden md:block">
            <div className="container relative">
              <div className="[clip-path:polygon(0_0,100%_0,100%_100%,0_65%)] w-[6.2rem] sm:w-[7.3rem] h-32 bg-[#8FD0FF16] absolute left-3 top-0"></div>
            </div>
            <div className="[clip-path:polygon(25%_0%,99%_18%,74%_71%,2%_52%)] w-44 h-36 bg-[#8FD0FF25] absolute left-[27.8%] top-[38%]"></div>
            <div className="[clip-path:polygon(91%_8%,100%_17%,100%_100%,21%_31%)] w-32 h-40 bg-[#8FD0FF25] absolute -right-4 bottom-[20%]"></div>
            <div className="[clip-path:polygon(32%_8%,100%_51%,68%_85%,0_44%)] w-36 h-40 bg-[#8FD0FF25] absolute left-[26%] bottom-[2%]"></div>

            <div className="[clip-path:polygon(0_19%,54%_0,54%_79%,0%_100%)] w-14 h-14 bg-yellow-350 opacity-10 absolute left-[15%] top-[30%]"></div>
            <div className="[clip-path:polygon(100%_0,0_0,0_42%)] w-24 h-20 bg-yellow-350 opacity-20 absolute right-[33%] top-0"></div>

            <div className="absolute w-10 h-24 left-[1%] top-[23%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 66 100"
                className="opacity-20 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="0 14 66 0 66 84 0 100"
                />
              </svg>
            </div>

            <div className="absolute w-24 h-12 left-[42%] top-[52%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 99 74"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="25 0 99 18 74 71 2 52"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-16 h-24 right-[30.1%] top-[20%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-20 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="100 14 32 0 32 83 100 99"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-20 h-28 right-[15%] bottom-[55%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="50 15 0 25 52 77 100 71"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-24 h-20 left-[8%] bottom-[27%] opacity-60">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="9 38 100 9 94 68 0 100"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <article className="container text-left pt-28 md:pt-32 xl:pt-40">
          <h2 className="text-black !font-bold text-3xl sm:text-4xl lg:text-6xl">
          Website Terms of Use
            </h2>

        <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
        Last Updated: 2023-08-08.
            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
         Welcome to scorr.ai ("us," "we," or "our"). These Terms of Use ("Terms") govern your access to and use of our website [https://www.scorr.ai/] (the "Site"). Please read these Terms carefully before using the Site. By accessing or using the Site, you agree to these Terms.

            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
            Use of the Site

            </h3 >
            You agree to use the Site only for lawful purposes and in a manner consistent with these Terms. You may not:
            <br />
- Attempt to gain unauthorized access to any part of the Site or its content
<br />
- Interfere with or disrupt the operation of the Site or its servers
<br />
- Engage in any conduct that restricts or inhibits any other user from using or enjoying the Site
<br />
- Upload, transmit, or distribute any content that is unlawful, harmful, or violates the rights of others

            <br />
            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
            Intellectual Property

            </h3 >
            All content on the Site, including text, graphics, images, videos, and software, is the property of [Website Name] or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or display any content from the Site without our prior written consent.

            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
            Links to Third-Party Websites
            </h3>
            The Site may contain links to third-party websites. We do not endorse or control these third-party websites. We encourage you to read the terms and conditions and privacy policies of any third-party website that you visit.
            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                Disclaimer of Warranties
                </h3>
                The Site is provided "as is." We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site is free of viruses or other harmful components. You assume the entire cost of any necessary servicing, repair, or correction of your property or operations as a result of using the Site.
                </p>
                <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                    Limitation of Liability
                    </h3>
                    We will not be liable for any damages of any kind arising from the use of the Site, including direct, indirect, incidental, consequential, and punitive damages.
                    </p>
                    <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                        Changes to the Terms
                        </h3>
                        We reserve the right to modify these Terms at any time. Please review these Terms periodically for changes. By continuing to use the Site after we post changes to these Terms, you agree to the modified Terms. If you do not agree to any changes, you must stop using the Site.
                        </p>
                        <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                            Governing Law
                            </h3>
                            These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law principles.

                            </p>
                            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                                Contact Us
                                </h3>
                                If you have any questions about these Terms, please contact us at roman@scorr.eu or at the address below:
                                <br />
                                SCORR UG
                                <br />
                                Hermine-von-Parish-Str. 44
                                <br />
                                81245 München
                                <br />
                                Germany
                                
                                </p>
        </article>
      </section>
    </>
  );
}
