
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award } from "lucide-react";

interface PrizeProps {
  title: string;
  amount: string;
  details: string;
  icon: React.ReactNode;
  emoji: string;
}

const prizes: PrizeProps[] = [
  {
    title: "First Place",
    amount: "$10,000",
    details: "The winning team will receive $10,000 and opportunities to pitch to investors.",
    icon: <Trophy className="w-8 h-8 text-yellow-300" />,
    emoji: "🏆"
  },
  {
    title: "Second Place",
    amount: "$5,000",
    details: "The runner-up team will receive $5,000 and mentorship from industry leaders.",
    icon: <Medal className="w-8 h-8 text-gray-300" />,
    emoji: "🥈"
  },
  {
    title: "Third Place",
    amount: "$2,500",
    details: "The third-place team will receive $2,500 and product launch support.",
    icon: <Award className="w-8 h-8 text-amber-700" />,
    emoji: "🥉"
  }
];

export default function PrizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} id="process" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Prizes & Rewards
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Win amazing prizes and recognition for your innovative solutions
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 } 
              }}
              className="h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* Completely transparent background with subtle gradient and blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c3040]/60 via-[#1e293b]/50 to-[#0f172a]/60 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Enhanced glass effect */}
                <div className="absolute inset-0 backdrop-blur-lg bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Improved light overlay at the top (glassmorphism effect) */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col p-8">
                  <div className="mb-2">
                    <span className="text-4xl">{prize.emoji}</span>
                  </div>
                  <div className="mb-4 bg-hackathon-blue-light/10 p-3 rounded-full w-fit">
                    {prize.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                  <p className="text-3xl font-bold text-hackathon-blue-light mb-4">
                    {prize.amount}
                  </p>
                  <p className="text-white/80 flex-grow">
                    {prize.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
