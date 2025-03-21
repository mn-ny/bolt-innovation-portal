
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useAnimationControls } from "framer-motion";
import { Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface JudgeProps {
  name: string;
  twitter: string;
  bio: string;
  image?: string;
}

const judges: JudgeProps[] = [
  {
    name: "Dr. Sophia Chen",
    twitter: "sophia_ai_expert",
    bio: "AI Research Director at Future Labs. Previously at Google DeepMind with 40+ published papers on machine learning and ethics in AI.",
    image: "/placeholder.svg"
  },
  {
    name: "Marcus Johnson",
    twitter: "marcusj_tech",
    bio: "CTO at TechForward. Founded three successful startups specializing in cloud computing and distributed systems.",
    image: "/placeholder.svg"
  },
  {
    name: "Elena Rodriguez",
    twitter: "elena_innov",
    bio: "VP of Innovation at GlobalTech with 15 years experience in digital transformation. Mentored hundreds of early-stage startups.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. James Wilson",
    twitter: "prof_jwilson",
    bio: "MIT Professor specializing in computational thinking and machine learning. Author of several books on AI ethics.",
    image: "/placeholder.svg"
  },
  {
    name: "Aisha Patel",
    twitter: "aisha_ecotech",
    bio: "Founder & CEO of EcoTech Solutions. Developed award-winning sustainable tech solutions deployed in over 20 countries.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Zhang",
    twitter: "michael_ai",
    bio: "Lead Developer at OpenAI. Expert in generative AI models and contributor to numerous open-source projects.",
    image: "/placeholder.svg"
  }
];

export default function CinematicJudgesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [horizontalScrollComplete, setHorizontalScrollComplete] = useState(false);
  const [verticalScrollPaused, setVerticalScrollPaused] = useState(false);
  const controls = useAnimationControls();
  
  // Track if section is in view
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.2,
    margin: "-10% 0px -10% 0px"
  });
  
  // Calculate the scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform the vertical scroll into horizontal scroll progress
  const horizontalScrollProgress = useTransform(
    scrollYProgress,
    [0, 0.5], // Use the first half of the section scroll for horizontal animation
    [0, 1]
  );

  // For the background gradient opacity
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    [0, 1, 1, 0]
  );

  // Handle vertical scroll pause
  useEffect(() => {
    let scrollRestoreTimeout: number;
    
    if (isInView && !horizontalScrollComplete) {
      // Pause vertical scrolling
      document.body.style.overflow = 'hidden';
      setVerticalScrollPaused(true);
      
      // Start horizontal scroll animation
      controls.start({
        x: horizontalRef.current ? 
          -horizontalRef.current.scrollWidth + window.innerWidth : 0,
        transition: {
          duration: judges.length * 1.2, // Duration based on number of judges
          ease: "easeInOut"
        }
      }).then(() => {
        setHorizontalScrollComplete(true);
        
        // Set a small delay before resuming vertical scroll for a smooth experience
        scrollRestoreTimeout = window.setTimeout(() => {
          document.body.style.overflow = '';
          setVerticalScrollPaused(false);
        }, 500);
      });
    } else if (!isInView) {
      // If scrolled away before animation completes, reset
      controls.stop();
      setHorizontalScrollComplete(false);
      document.body.style.overflow = '';
      setVerticalScrollPaused(false);
    }
    
    return () => {
      window.clearTimeout(scrollRestoreTimeout);
      document.body.style.overflow = '';
    };
  }, [isInView, horizontalScrollComplete, controls]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" id="judges">
      {/* Background gradient */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0"
      />
      
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="py-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Meet Our Judges
            </h2>
            <p className="text-lg text-white/70">
              Our panel of distinguished industry experts will evaluate your submissions
            </p>
          </motion.div>
          
          {/* Horizontal scrolling container */}
          <div className="relative overflow-hidden">
            <motion.div 
              ref={horizontalRef}
              className="flex items-stretch gap-8 px-6 md:px-12 min-w-max"
              initial={{ x: 0 }}
              animate={controls}
            >
              {judges.map((judge, index) => (
                <motion.div
                  key={index}
                  className="w-[350px] flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + index * 0.1
                  }}
                >
                  <Card className="bg-black/30 backdrop-blur-lg border-none h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 border-2 border-white/10">
                          <AvatarImage src={judge.image} alt={judge.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg">
                            {judge.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl text-white">{judge.name}</CardTitle>
                          <CardDescription className="text-white/70 flex items-center gap-1 mt-1">
                            <Twitter className="w-3.5 h-3.5 text-blue-400" />
                            <span>@{judge.twitter}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-32">
                        <p className="text-white/80 text-sm">{judge.bio}</p>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {verticalScrollPaused && !horizontalScrollComplete && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>Showcasing judges</p>
            <div className="mt-2 flex space-x-1">
              {judges.map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/30"
                  animate={{ 
                    backgroundColor: [
                      "rgba(255,255,255,0.3)", 
                      "rgba(255,255,255,0.9)", 
                      "rgba(255,255,255,0.3)"
                    ] 
                  }}
                  transition={{ 
                    duration: judges.length * 1.2,
                    times: [0, i / (judges.length - 1), 1],
                    ease: "linear",
                    repeat: 0
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
