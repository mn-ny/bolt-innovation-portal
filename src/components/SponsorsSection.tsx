
import { useEffect, useState } from "react";

interface SponsorProps {
  name: string;
  logo: string;
}

const sponsors: SponsorProps[] = [
  { name: "DUDE WIPES", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
  { name: "WonderUp", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
  { name: "bobblehat", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
  { name: "coda", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
  { name: "evon", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
  { name: "WonderUp2", logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png" },
];

export default function SponsorsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("sponsors-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="sponsors-section"
      className="py-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className={`text-center mb-12 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-out`}
        >
          <h3 className="text-white/80 text-sm uppercase tracking-wider font-medium">· Sponsors ·</h3>
        </div>
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 delay-300 ease-out`}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="sponsor-image object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
