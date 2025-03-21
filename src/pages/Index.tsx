
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import PrizesSection from "@/components/PrizesSection";
import JudgesCarousel from "@/components/JudgesCarousel";
import LoadingScreen from "@/components/LoadingScreen";
import EventDetailsSection from "@/components/EventDetailsSection";

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
        className="min-h-screen bg-hackathon-dark overflow-hidden"
      >
        <Header />
        <main>
          <HeroSection setIsLoading={setIsLoading} />
          <EventDetailsSection />
          <SponsorsSection />
          <PrizesSection />
          <JudgesCarousel />
        </main>
      </motion.div>
    </>
  );
}
