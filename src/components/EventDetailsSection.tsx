
import { Calendar, MapPin, Trophy, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EventDetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0" 
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Event Details
          </h2>
          <p className="text-lg text-white/70">
            Join us for the world's largest hackathon and compete for incredible prizes
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Location */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Location</h3>
            </div>
            <p className="text-white/80 mb-4">Virtual</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Worldwide Access
            </Badge>
          </motion.div>
          
          {/* Date */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Date</h3>
            </div>
            <p className="text-white/80 mb-4">TBD</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              48-Hour Event
            </Badge>
          </motion.div>
          
          {/* Prizes */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Trophy className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Prizes</h3>
            </div>
            <p className="text-white/80 mb-4">$1M+ Prize Pool</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Multiple Categories
            </Badge>
          </motion.div>
          
          {/* Theme */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Sparkle className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Theme</h3>
            </div>
            <p className="text-white/80 mb-4">AI for Good</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Sustainable Solutions
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
