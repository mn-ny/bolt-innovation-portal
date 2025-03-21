
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import PrizesSection from "@/components/PrizesSection";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-hackathon-dark overflow-hidden"
    >
      <Header />
      <main>
        <HeroSection />
        <EventDetailsSection />
        <PrizesSection />
        <SponsorsSection />
      </main>
    </motion.div>
  );
}
