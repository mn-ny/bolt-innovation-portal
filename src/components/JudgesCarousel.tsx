
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

export default function JudgesCarousel() {
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
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" id="judges">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0"
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Meet Our Judges
          </h2>
          <p className="text-lg text-white/70">
            Our panel of distinguished industry experts will evaluate your submissions
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {judges.map((judge, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5, 
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    className="h-full"
                  >
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 h-full">
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
                        <ScrollArea className="h-24">
                          <p className="text-white/80 text-sm">{judge.bio}</p>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious 
                className="relative static transform-none mx-2 bg-white/10 hover:bg-white/20 border-white/20 text-white"
              />
              <CarouselNext 
                className="relative static transform-none mx-2 bg-white/10 hover:bg-white/20 border-white/20 text-white"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
