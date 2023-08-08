import React from "react";

interface WorkEmailInputProps {
  onSubmit: (email: string) => void;
}

export default function Imprint() {
 

  return (
    <>
     <section className="relative pb-28 sm:pb-48 md:pb-56 xl:pb-50 max-h-[70rem] overflow-hidden" >
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
            Imprint
            </h2>

        <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
        <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                Registered Office of the company
            </h3 >
           
        SCORR UG
            <br />
Registration Number: HRB 285794
            <br />
Adress: Hermine-von-Parish-Str. 44, 81245 München, Deutschland

            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                Managing Directors
            </h3 >
            
            Roman Murov
            <br />
            Shriram Pawar
            <br />
            </p>
            <p className="text-black text-sm md:text-base lg:text-xl !font-light lg:tracking-[0] mt-8 px-10 lg:px-0">
            <h3 className="text-black !font-bold text-xl sm:text-2xl lg:text-2xl">
                Contact
            </h3 >
            Email: roman@scorr.eu

            </p>
        </article>
      </section>
    </>
  );
}
