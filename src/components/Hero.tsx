import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import BannerImage from "./BannerImage";
import WorkEmailInput from "./EmailForm";
import axios from "axios";

interface WorkEmailInputProps {
  onSubmit: (email: string) => void;
}



export default function Hero() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const animations = ["pipeline risk", "churn", "sales forecasting"];
  
  const typingRef = useRef<HTMLSpanElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");



  const handleEmailSubmit = (email: string) => {
    const apiUrl = "https://testback.scorr-app.eu/users/web-signups";
  
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        setSuccessMessage('Thank you for signing up! We will be in touch soon.');
      })
      .catch((error) => {
        console.error("Error storing email:", error);
      });
  };
  

  // Function to change text at regular intervals
  const changeAnimation = () => {
    setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
    setIsTyping(false);
  };

  // Start the text rotation interval when the component mounts
  useEffect(() => {
    const interval = setInterval(changeAnimation, 3000); // Change text every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  // Typing animation effect
  useEffect(() => {
    if (!typingRef.current || !isTyping) return;

    const text = animations[animationIndex];
    let currentText = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        currentText = text.slice(0, index);
        typingRef.current!.textContent = currentText;
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed in milliseconds

    return () => clearInterval(typingInterval);
  }, [animationIndex, isTyping]);


  useEffect(() => {
    // Show the text after a short delay to avoid the initial flash
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [animationIndex]);

  return (
    <>
      <section className="relative pb-16 sm:pb-40 md:pb-56 xl:pb-50 max-h-[70rem] overflow-hidden mt-8 sm:mt-4" >
        <div className="pointer-events-none full-size  -z-[1]"></div>
        <div
          className={[
            "pointer-events-none full-size -z-[1]",
            "opacity-70 md:opacity-100",
           
          ].join(" ")}
        >
          <div className="full-size top-0 ">
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
          <h2 className="text-black !font-bold text-5xl sm:text-4xl lg:text-6xl lg:tracking-[0] mt-0 sm:mt-0 px-5 lg:px-0">
            You lose millions of revenue by
            <br />
             taking actions too late.
          </h2>
        <p className="text-black text-sm md:text-base lg:text-xl !font-medium lg:tracking-[0] mt-5 px-5 lg:px-0">
            Predictive insights are the key to saving customers, securing deals and driving revenue.
            <br />
            With SCORR anyone can leverage AI to predict{" "}
            {isTyping && ( // Only show the text when the typing animation is in progress
              <span
                ref={typingRef}
                style={{
                  borderBottom: "2px solid blue",
                  color: "blue",
                  

                }}
              />
            )}
            {isTyping ? "" : animations[animationIndex]} {/* Hide the completed word during animation */}
            in minutes.
          </p>
          <p className="text-black text-xs md:text-sm lg:text-base !font-medium lg:tracking-[0] mt-15 px-5 lg:px-0">
            Join the waitlist and be the first to get access.
          </p>
          
          <WorkEmailInput onSubmit={handleEmailSubmit} />
          {successMessage && (
        <div className="success-message" style={{paddingTop:'10px'}}>
          <img
            src="Emoji_u1f389.svg.png" // Replace with the path to your celebration logo image or animated SVG
            alt="Celebration logo"
            className="w-6 h-6 mr-2 animate-celebration-logo"
          />
          <p className=" animate-success-message">{successMessage}</p>
        </div>
        )}
        </article>
      </section>
    </>
  );
}
