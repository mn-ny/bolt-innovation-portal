
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorMarquee from "@/components/SponsorMarquee";
import LoadingScreen from "@/components/LoadingScreen";
import { BentoDemo } from "@/components/ui/bento-demo";

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
          
          <section className="container py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <h2 className="text-4xl font-display font-bold text-white mb-4">Explore Features</h2>
              <p className="text-lg text-white/70">Check out what we have to offer</p>
            </motion.div>
            <BentoDemo />
          </section>
          
          <div id="info" className="h-24"></div> {/* Anchor point for info section */}
        </main>
      </motion.div>
    </>
  );
}
