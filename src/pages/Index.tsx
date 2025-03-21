
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorMarquee from "@/components/SponsorMarquee";
import LoadingScreen from "@/components/LoadingScreen";
import { Preview } from "@/components/ui/text-rotate-demo";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate minimum loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="min-h-screen bg-hackathon-dark overflow-x-hidden"
      >
        <Header />
        <main>
          <HeroSection setIsLoading={setIsLoading} />
          <SponsorMarquee />
          <div id="judges" className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Meet Our Judges</h2>
            <Preview />
          </div>
          <div id="info" className="h-24"></div> {/* Anchor point for info section */}
        </main>
      </motion.div>
    </>
  );
}
