import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { GlowingEffect } from "./ui/glowing-effect";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="py-20 w-screen px-4 md:px-10">
      <div className="relative rounded-lg bg-black py-20 text-blue-50 sm:overflow-hidden">
        <GlowingEffect
          blur={4}
          borderWidth={4}
          spread={150}
          glow={true}
          disabled={false}
          proximity={120}
          inactiveZone={0.01}
        />
        
        <div className="relative z-0">
          <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
            <ImageClipBox
              src="/img/contact-1.webp"
              clipClass="contact-clip-path-1"
            />
            <ImageClipBox
              src="/img/contact-2.webp"
              clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            />
          </div>

          <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
            <ImageClipBox
              src="/img/swordman-partial.webp"
              clipClass="absolute md:scale-125"
            />
            <ImageClipBox
              src="/img/swordman.webp"
              clipClass="sword-man-clip-path md:scale-125"
            />
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <p className="mb-8 font-general text-[10px] uppercase">
              Get in Touch
            </p>

            <AnimatedTitle
              title="let&#39;s tr<b>a</b>nsform your <br /> business with <br /> innov<b>a</b>tive solut<b>i</b>ons."
              className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
            />

            <Button title="Contact Us" containerClass="mt-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
