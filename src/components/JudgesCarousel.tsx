import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface JudgeProps {
  name: string;
  role: string;
  twitter: string;
  bio: string;
  image: string;
}

const judges: JudgeProps[] = [
  {
    name: "Pieter Levels",
    role: "Founder",
    twitter: "levelsio",
    bio: "Founder of Nomad List and Remote OK. Building profitable internet businesses with a focus on bootstrapping and indie hacking.",
    image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg"
  },
  {
    name: "Logan Kilpatrick",
    role: "AI Developer Relations",
    twitter: "OfficialLoganK",
    bio: "AI Developer Relations at OpenAI, formerly at Apple. Passionate about making AI accessible to developers worldwide and building AI-powered tools.",
    image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
  },
  {
    name: "Sara Du",
    role: "Co-founder & CEO",
    twitter: "saranormous",
    bio: "Co-founder & CEO of Alloy Automation. Forbes 30 Under 30. Building the future of e-commerce automation and integration platforms.",
    image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg"
  },
  {
    name: "Theo Browne",
    role: "Founder",
    twitter: "theo",
    bio: "Founder of Ping Labs, creator of t3.gg. TypeScript enthusiast and developer educator focused on modern web technologies and frameworks.",
    image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg"
  },
  {
    name: "Evan You",
    role: "Creator of Vue.js",
    twitter: "youyuxi",
    bio: "Creator of Vue.js, Vite, and other open source tools. Independent open source developer focused on making web development more accessible and efficient.",
    image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg"
  },
  {
    name: "Krishna Panyam",
    role: "Co-founder",
    twitter: "thisiskp_",
    bio: "Co-founder at Reflect. Building tools for thought and knowledge management to help people think better and work more efficiently.",
    image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg"
  },
  {
    name: "Alex Albert",
    role: "Co-founder",
    twitter: "alexalbert__",
    bio: "Co-founder at Rows. Building the next generation spreadsheet with superpowers that combines the flexibility of spreadsheets with the power of programming.",
    image: "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg"
  },
  {
    name: "Ben Tossell",
    role: "Founder",
    twitter: "bentossell",
    bio: "Founder of Makerpad (acquired by Zapier). No-code advocate and entrepreneur helping people build without traditional coding knowledge.",
    image: "https://pbs.twimg.com/profile_images/1878086921726943233/vOx1kjeP_400x400.jpg"
  },
  {
    name: "Ricardo Cabello",
    role: "Creator of Three.js",
    twitter: "mrdoob",
    bio: "Creator of Three.js. Pushing the boundaries of what's possible on the web with 3D graphics and WebGL technologies.",
    image: "https://pbs.twimg.com/profile_images/1619147369999917056/5jd5MK9C_400x400.jpg"
  },
  {
    name: "Andrej Karpathy",
    role: "AI Researcher",
    twitter: "karpathy",
    bio: "Previously Senior Director of AI at Tesla, founding member of OpenAI. Researcher and educator in deep learning, computer vision, and AI systems.",
    image: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg"
  },
  {
    name: "Tim Soret",
    role: "Game Designer & Filmmaker",
    twitter: "timsoret",
    bio: "Game designer and filmmaker. Creative Director of The Last Night at Odd Tales studio, known for combining pixel art with modern rendering techniques.",
    image: "https://pbs.twimg.com/profile_images/1882867567099809793/qTScdAu-_400x400.jpg"
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
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5, 
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Glassmorphism background with gradients */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2c3040]/60 via-[#1e293b]/50 to-[#0f172a]/60 opacity-80"></div>
                      
                      {/* Glass overlay */}
                      <div className="absolute inset-0 backdrop-blur-lg bg-black/5"></div>
                      
                      {/* Light overlay at the top (glassmorphism effect) */}
                      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/10 to-transparent"></div>
                      
                      <div className="flex flex-col md:flex-row relative">
                        <div className="w-full md:w-1/3">
                          <div className="aspect-[4/3] md:h-full w-full overflow-hidden">
                            <img 
                              src={judge.image} 
                              alt={judge.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </div>
                        
                        <div className="w-full md:w-2/3 p-6">
                          <h3 className="text-2xl text-white font-display font-bold">{judge.name}</h3>
                          
                          <div className="flex items-center gap-2 mt-1 mb-1">
                            <div className="bg-black rounded-full p-0.5">
                              <X className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm font-medium text-white/70">@{judge.twitter}</span>
                          </div>
                          
                          <p className="text-white/80 text-sm mb-2">{judge.role}</p>
                          
                          <p className="text-white/70 text-sm">{judge.bio}</p>
                        </div>
                      </div>
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
