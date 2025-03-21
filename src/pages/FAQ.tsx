
import { motion } from "framer-motion";
import Header from "@/components/Header";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-hackathon-dark">
      <Header />
      <div className="pt-32 px-6 max-w-4xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg">
            Everything you need to know about the hackathon
          </p>
        </motion.div>
        
        <FAQAccordion />
      </div>
    </div>
  );
}
