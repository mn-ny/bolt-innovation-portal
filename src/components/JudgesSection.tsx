
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface JudgeProps {
  name: string;
  twitter: string;
  bio: string;
  image: string;
}

const judges: JudgeProps[] = [
  {
    name: "Pieter Levels",
    twitter: "levelsio",
    bio: "Founder of Nomad List and Remote OK. Building profitable internet businesses.",
    image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg"
  },
  {
    name: "Logan Kilpatrick",
    twitter: "OfficialLoganK",
    bio: "AI Developer Relations at OpenAI, formerly at Apple. Passionate about making AI accessible to developers worldwide.",
    image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
  },
  {
    name: "Sara Du",
    twitter: "saranormous",
    bio: "Co-founder & CEO of Alloy Automation. Forbes 30 Under 30. Building the future of e-commerce automation.",
    image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg"
  },
  {
    name: "Theo Browne",
    twitter: "theo",
    bio: "Founder of Ping Labs, creator of t3.gg. TypeScript enthusiast and developer educator.",
    image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg"
  },
  {
    name: "Evan You",
    twitter: "youyuxi",
    bio: "Creator of Vue.js, Vite, and other open source tools. Independent open source developer.",
    image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg"
  },
  {
    name: "Krishna Panyam",
    twitter: "thisiskp_",
    bio: "Co-founder at Reflect. Building tools for thought and knowledge management.",
    image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg"
  },
  {
    name: "Alex Albert",
    twitter: "alexalbert__",
    bio: "Co-founder at Rows. Building the next generation spreadsheet with superpowers.",
    image: "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg"
  },
  {
    name: "Ben Tossell",
    twitter: "bentossell",
    bio: "Founder of Makerpad (acquired by Zapier). No-code advocate and entrepreneur.",
    image: "https://pbs.twimg.com/profile_images/1878086921726943233/vOx1kjeP_400x400.jpg"
  },
  {
    name: "Ricardo Cabello",
    twitter: "mrdoob",
    bio: "Creator of Three.js. Pushing the boundaries of what's possible on the web with 3D graphics.",
    image: "https://pbs.twimg.com/profile_images/1619147369999917056/5jd5MK9C_400x400.jpg"
  },
  {
    name: "Andrej Karpathy",
    twitter: "karpathy",
    bio: "Previously Senior Director of AI at Tesla, founding member of OpenAI. Researcher and educator in deep learning.",
    image: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg"
  },
  {
    name: "Tim Soret",
    twitter: "timsoret",
    bio: "Game designer and filmmaker. Creative Director of The Last Night at Odd Tales studio.",
    image: "https://pbs.twimg.com/profile_images/1882867567099809793/qTScdAu-_400x400.jpg"
  }
];

export default function JudgesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
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
                  <p className="text-white/80 text-sm">{judge.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
