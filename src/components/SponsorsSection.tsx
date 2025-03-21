
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
    name: "Algorand",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/algorand.png",
    tier: "platinum"
  },
  {
    name: "Anthropic",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/anthropic.png",
    tier: "platinum"
  },
  {
    name: "Cloudflare",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/cloudflare.png",
    tier: "gold"
  },
  {
    name: "Exa",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/exa.png",
    tier: "gold"
  },
  {
    name: "HSR",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/hsr.png",
    tier: "silver"
  },
  {
    name: "Loops",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/loops.png",
    tier: "silver"
  },
  {
    name: "Netlify",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/netlify.png",
    tier: "silver"
  },
  {
    name: "Sentry",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/sentry.png",
    tier: "silver"
  },
  {
    name: "Supabase",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/supabase.png",
    tier: "gold"
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
