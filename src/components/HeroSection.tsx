import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useAnimate, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  setIsLoading?: (loading: boolean) => void;
}

export default function HeroSection({ setIsLoading }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isLoaded && setIsLoading) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded, setIsLoading]);
  
  // Split text animation for title
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  };
  
  const titleItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  // Subtitle animation
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Button container animations - simplified to not conflict with button styling
  const primaryButtonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 2.0,
        duration: 0.5
      }
    },
  };
  
  const secondaryButtonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 2.2,
        duration: 0.5
      }
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Top gradient overlay - made stronger */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-[250px] z-10 bg-gradient-to-b from-hackathon-dark via-hackathon-dark/95 to-transparent" 
      />
      
      {/* Full-height Spline container - adjusted position */}
      <div className="absolute inset-0 w-full h-full" style={{ top: "10vh" }}>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 0.9
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <Spline
              scene="https://prod.spline.design/ITO6OJ2xaZTLiTae/scene.splinecode"
              onLoad={() => {
                console.log("Spline scene loaded");
                setIsLoaded(true);
              }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
      
      {/* Bottom gradient overlay - made stronger */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-full h-[500px] z-10 bg-gradient-to-t from-hackathon-dark via-hackathon-dark/80 to-transparent" 
      />
      
      {/* Content container with improved vertical positioning - moved down */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6 py-16 mt-32">
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-tight"
        >
          <motion.span variants={titleItem} className="block font-display">The World's</motion.span>
          <motion.span variants={titleItem} className="block italic font-normal font-display text-white/90">Largest</motion.span>
          <motion.span variants={titleItem} className="block font-display">Hackathon</motion.span>
        </motion.h1>
        
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-white/80 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your operations with AI-driven solutions that cut costs, save time, and boost efficiency all in record time.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div
            variants={primaryButtonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              variant="hackathon" 
              size="xl" 
              rounded="full"
              className="hover:scale-105 transition-transform duration-300"
            >
              Register Now
            </Button>
          </motion.div>
          
          <motion.div
            variants={secondaryButtonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              variant="hackathon_outline" 
              size="xl" 
              rounded="full"
              className="hover:scale-105 transition-transform duration-300"
            >
              <span className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-blue-500 inline-block animate-pulse-subtle"></span>
                Become a Sponsor
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
