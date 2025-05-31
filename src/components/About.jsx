import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Animate the clip path while maintaining aspect ratio
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "none",
    });

    // Animate the overlay and text to appear when image is fully zoomed
    clipAnimation.to(".overlay", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }, ">0.2");

    clipAnimation.to(".service-text", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, ">0.1");
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-white">
      <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Hanumatrix
        </p>

        <AnimatedTitle
          title="Pio<b>n</b>eering the future of <br /> digital <b>t</b>ransformation"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext max-w-3xl text-center px-4">
          <p className="text-lg mb-2">Transforming businesses through innovative technology solutions</p>
          <p className="text-gray-500">
            Hanumatrix delivers cutting-edge digital solutions that empower organizations
            to thrive in the modern digital landscape
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative h-[494.176px] w-[465.634px] mx-auto">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black/50 p-8 opacity-0">
            <div className="service-text text-center text-white opacity-0 translate-y-10">
              <h2 className="mb-4 text-4xl font-bold">Digital Transformation</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Empowering businesses with end-to-end digital solutions that drive innovation, 
                enhance customer experience, and optimize operations for the modern digital landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
