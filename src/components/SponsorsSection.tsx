
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimationControls } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50
      }
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="sponsors-section" 
      ref={ref} 
      className="py-24 relative z-10 bg-gradient-to-b from-hackathon-dark to-hackathon-blue/10"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Our Sponsors</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            The world's leading technology companies supporting innovation and creativity
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Platinum Sponsors</h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center"
            >
              {platinumSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  whileHover="hover"
                  className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-8 w-full h-32"
                >
                  <motion.img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Gold Sponsors</h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center"
            >
              {goldSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  whileHover="hover"
                  className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full h-24"
                >
                  <motion.img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">Silver Sponsors</h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center"
            >
              {silverSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  whileHover="hover"
                  className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-4 w-full h-20"
                >
                  <motion.img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <motion.div 
          variants={buttonVariants}
          whileHover="hover"
          className="flex justify-center mt-16"
        >
          <Button variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-10 py-7 rounded-full transition-all duration-300 text-base font-medium">
            Become a Sponsor
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
