
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PrizeProps {
  title: string;
  amount: string;
  description: string;
  emoji: string;
}

const prizes: PrizeProps[] = [
  {
    title: "First Place",
    amount: "$500,000",
    description: "For the most innovative solution with the highest impact potential",
    emoji: "🏆"
  },
  {
    title: "Second Place",
    amount: "$250,000",
    description: "For exceptional technical implementation and presentation",
    emoji: "🥈"
  },
  {
    title: "Third Place",
    amount: "$100,000",
    description: "For outstanding creativity and problem-solving approach",
    emoji: "🥉"
  }
];

// Component for animated counting of prize amounts
const CountAnimation = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      // Get animation duration based on the value (higher values animate longer)
      const duration = Math.min(2000, Math.log(end) * 400);
      const incrementTime = Math.floor(duration / end);
      
      // Don't let increment time go below 25ms
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 25));
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  
  // Format the count as currency
  const formattedCount = count ? `$${count.toLocaleString()}` : "$0";
  
  return <span ref={ref}>{isInView ? formattedCount : value}</span>;
};

export default function PrizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
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
    <section ref={ref} className="relative py-24 overflow-hidden" id="prizes">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-t from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            $1M+ in Prizes
          </h2>
          <p className="text-lg text-white/70">
            Compete for substantial prizes across multiple categories
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
                y: -5, 
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <Card className="bg-black border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-0 flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                    className="text-4xl mb-3"
                  >
                    {prize.emoji}
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-white font-display">
                    {prize.title}
                  </CardTitle>
                  <CardDescription className="text-white text-2xl font-bold mt-2">
                    <CountAnimation value={prize.amount} />
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center pt-4">
                  <p className="text-white/80">{prize.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
