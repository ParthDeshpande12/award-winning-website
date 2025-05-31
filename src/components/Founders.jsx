import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    description: "Visionary leader with 15+ years of experience in digital transformation and technology innovation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2560&auto=format&fit=crop"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    description: "Tech innovator specializing in AI and cloud architecture with a track record of successful enterprise solutions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2560&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Chief Innovation Officer",
    description: "Digital strategist and thought leader driving cutting-edge solutions in the technology sector.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2560&auto=format&fit=crop"
  }
];

const Founders = () => {
  return (
    <div id="founders" className="min-h-screen w-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-16 flex flex-col items-center gap-5">
          <p className="font-general text-sm uppercase text-white md:text-[10px]">
            Leadership Team
          </p>

          <AnimatedTitle
            title="Meet our <b>F</b>ounders"
            containerClass="mt-5 !text-white text-center"
          />

          <div className="about-subtext">
            <p className="text-white">Visionary leaders driving innovation</p>
            <p className="text-gray-400">
              Our founders bring together decades of experience in technology, 
              innovation, and digital transformation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {founders.map((founder, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {founder.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-yellow-500 text-sm max-w-sm mt-2"
                >
                  {founder.role}
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full mt-4"
                >
                  <img
                    src={founder.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={founder.name}
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-300"
                >
                  {founder.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders; 