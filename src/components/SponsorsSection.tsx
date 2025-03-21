
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface SponsorProps {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver";
}

const sponsors: SponsorProps[] = [
  {
    name: "DUDE WIPES",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "platinum"
  },
  {
    name: "WonderUp",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "platinum"
  },
  {
    name: "bobblehat",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "gold"
  },
  {
    name: "coda",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "gold"
  },
  {
    name: "evon",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "silver"
  },
  {
    name: "WonderUp2",
    logo: "/lovable-uploads/f2fb5553-161e-4078-b8d9-705d241525d6.png",
    tier: "silver"
  }
];

export default function SponsorsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    
    const element = document.getElementById("sponsors-section");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");

  return (
    <section id="sponsors-section" className="py-24 relative z-10 bg-gradient-to-b from-hackathon-dark to-hackathon-blue/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-12 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Our Sponsors</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            The world's leading technology companies supporting innovation and creativity
          </p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Platinum Sponsors</h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 delay-100 ease-out`}>
              {platinumSponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-8 w-full h-32">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Gold Sponsors</h3>
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 delay-200 ease-out`}>
              {goldSponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full h-24">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div>
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Silver Sponsors</h3>
            <div className={`grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 delay-300 ease-out`}>
              {silverSponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-4 w-full h-20">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`flex justify-center mt-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 delay-400 ease-out`}>
          <Button variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-10 py-7 rounded-full transition-all duration-300 text-base font-medium">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
