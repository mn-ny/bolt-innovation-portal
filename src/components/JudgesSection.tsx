
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate";

const judges = [
  {
    name: "Sarah Johnson",
    title: "AI Research Director",
    company: "TechForward",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks. Sarah has published over 30 papers and holds 12 patents."
  },
  {
    name: "Michael Chen",
    title: "CTO",
    company: "Quantum Solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Pioneering quantum computing expert and entrepreneur with a focus on practical applications. Founded two successful startups and mentors tech innovators."
  },
  {
    name: "Amara Patel",
    title: "Venture Capitalist",
    company: "Future Fund",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Investment strategist specializing in emerging technologies. Amara has helped over 50 startups secure funding and scale globally."
  },
  {
    name: "David Okafor",
    title: "Blockchain Developer",
    company: "Decentralized Systems",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Award-winning blockchain architect who has developed innovative solutions for financial systems and supply chain management."
  },
  {
    name: "Elena Rodriguez",
    title: "UX Design Lead",
    company: "Interface Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Human-centered design expert who bridges technology and user needs. Elena has transformed user experiences for Fortune 500 companies."
  }
];

function JudgeCard({ 
  judge, 
  index, 
  onInView 
}: { 
  judge: typeof judges[0]; 
  index: number; 
  onInView: (index: number, inView: boolean) => void 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.6 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.3, 1, 1, 0.3]);
  
  useEffect(() => {
    onInView(index, isInView);
  }, [isInView, index, onInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ opacity, y }}
      className="w-full snap-center p-4"
    >
      <div className="bg-gradient-to-br from-black/30 via-gray-900/20 to-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-hackathon-blue-glow/20 transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row items-center p-6 gap-6">
          {/* Image section */}
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-lg">
            <img 
              src={judge.image} 
              alt={judge.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content section */}
          <div className="flex flex-col flex-grow text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white">{judge.name}</h3>
            <div className="text-hackathon-blue-light flex items-center mt-1 mb-2">
              <span>{judge.title} @ {judge.company}</span>
            </div>
            <p className="text-white/70 text-sm md:text-base">{judge.bio}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function JudgesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRotateRef = useRef<TextRotateRef>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeJudge, setActiveJudge] = useState(0);

  const handleJudgeInView = (index: number, inView: boolean) => {
    if (inView) {
      setActiveJudge(index);
      if (textRotateRef.current) {
        textRotateRef.current.jumpTo(index);
      }
    }
  };

  return (
    <section ref={sectionRef} id="judges" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-hackathon-blue-light/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-hackathon-blue-dark/30 rounded-full blur-[120px] animate-pulse-glow" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Meet Our Judges
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our panel of industry experts will evaluate your innovations
          </p>
          
          <div className="mt-4">
            <TextRotate
              ref={textRotateRef}
              texts={judges.map(j => j.name)}
              mainClassName="text-2xl md:text-3xl lg:text-4xl text-hackathon-blue-light font-bold justify-center"
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="text-gradient-blue"
              staggerDuration={0.02}
              staggerFrom="first"
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            />
          </div>
        </motion.div>
        
        <div className="space-y-8 snap-y snap-mandatory">
          {judges.map((judge, index) => (
            <JudgeCard 
              key={index} 
              judge={judge} 
              index={index}
              onInView={handleJudgeInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
